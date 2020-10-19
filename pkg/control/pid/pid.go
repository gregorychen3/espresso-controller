package pid

import (
	"time"

	"github.com/google/uuid"
	"github.com/gregorychen3/espresso-controller/internal/espresso/heating_element"
	"github.com/gregorychen3/espresso-controller/internal/espresso/temperature"
	"github.com/gregorychen3/espresso-controller/internal/fifo"
	"github.com/gregorychen3/espresso-controller/internal/log"
	"github.com/gregorychen3/espresso-controller/pkg/control"
	"go.uber.org/zap"
)

const (
	min              float64 = 80.0
	max              float64 = 100.0
	errSumLookback   int     = 5
	avgSlopeLookback int     = 5

	defaultP float64 = 3
	defaultI float64 = 2
	defaultD float64 = 200
)

// PID is a temperature controller that implements PID control. It
// satisfies the control.Strategy interface.
// https://en.wikipedia.org/wiki/Bang%E2%80%93bang_control
type PID struct {
	P                  float64
	I                  float64
	D                  float64
	targetTemperature  control.TargetTemperature
	heatingElement     *heating_element.HeatingElement
	temperatureMonitor *temperature.Monitor
	temperatureSubId   uuid.UUID
}

func NewPid(heatingElem *heating_element.HeatingElement, sampler *temperature.Monitor) (*PID, error) {
	return &PID{
		P:                  defaultP,
		I:                  defaultI,
		D:                  defaultD,
		targetTemperature:  control.TargetTemperature{Value: 93, SetAt: time.Now()},
		heatingElement:     heatingElem,
		temperatureMonitor: sampler,
	}, nil
}

func (c *PID) Run() error {
	go func() {
		subId, subCh := c.temperatureMonitor.Subscribe()
		c.temperatureSubId = subId
		prevErrs := fifo.NewFIFO(errSumLookback)
		prevSlopes := fifo.NewFIFO(avgSlopeLookback)

		for sample := range subCh {
			curErr := c.targetTemperature.Value - sample.Value

			prevSlopes.Push(prevErrs.Last() - curErr)
			avgSlope := prevSlopes.Average()

			prevErrs.Push(curErr)
			errSum := prevErrs.Sum()

			rawOut := (c.P*curErr + c.I*(errSum) - c.D*(avgSlope)) / 100

			var out float64
			if rawOut <= 0 {
				out = 0
			} else if rawOut >= 1 {
				out = 1
			} else {
				out = rawOut
			}

			log.Debug("Setting duty factor",
				zap.Float64("dutyFactor", out),
				zap.Float64("curErr", curErr),
				zap.Float64("errSum", errSum),
				zap.Float64("avgSlope", avgSlope),
				zap.Float64("curTemperature", sample.Value),
				zap.Float64("targetTemperature",
					c.GetTargetTemperature().Value),
			)
			c.heatingElement.SetDutyFactor(out)

		}
	}()
	return nil
}

func (c *PID) GetTargetTemperature() control.TargetTemperature {
	return c.targetTemperature
}

func (c *PID) SetTargetTemperature(temperature float64) control.TargetTemperature {
	targetTemperature := control.TargetTemperature{
		Value: temperature,
		SetAt: time.Now(),
	}
	c.targetTemperature = targetTemperature
	return targetTemperature
}

func (c *PID) Shutdown() error {
	c.temperatureMonitor.Unsubscribe(c.temperatureSubId)
	return nil
}
