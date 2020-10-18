package pid

import (
	"time"

	"github.com/google/uuid"
	"github.com/gregorychen3/espresso-controller/internal/espresso/heating_element"
	"github.com/gregorychen3/espresso-controller/internal/espresso/temperature"
	"github.com/gregorychen3/espresso-controller/internal/log"
	"github.com/gregorychen3/espresso-controller/pkg/control"
	"go.uber.org/zap"
)

const (
	min float64 = 80.0
	max float64 = 100.0
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
		P:                  0,
		D:                  0,
		targetTemperature:  control.TargetTemperature{Value: 93, SetAt: time.Now()},
		heatingElement:     heatingElem,
		temperatureMonitor: sampler,
	}, nil
}

func (c *PID) Run() error {
	go func() {
		subId, subCh := c.temperatureMonitor.Subscribe()
		c.temperatureSubId = subId
		prev10Errs := []float64{0.0}

		for sample := range subCh {
			curErr := c.targetTemperature.Value - sample.Value

			prevErr := 0.0
			if len(prev10Errs) > 0 {
				prevErr = prev10Errs[len(prev10Errs)-1]
			}

			errSum := curErr
			for _, e := range prev10Errs {
				errSum += e
			}

			rawOut := (c.P*curErr + c.I*(errSum) - c.D*(prevErr-curErr)) / 100

			var out float64
			if rawOut <= 0 {
				out = 0
			} else if rawOut >= 1 {
				out = 1
			} else {
				out = rawOut
			}

			log.Debug("Setting duty factor",
				zap.Float64("prevErr", prevErr),
				zap.Float64("curErr", curErr),
				zap.Float64("dutyFactor", out),
				zap.Float64("curTemperature", sample.Value),
				zap.Float64("targetTemperature",
					c.GetTargetTemperature().Value),
			)
			c.heatingElement.SetDutyFactor(out)

			if (len(prev10Errs)) < 10 {
				prev10Errs = append(prev10Errs, curErr)
			} else {
				prev10Errs = append(prev10Errs[1:], curErr)
			}
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
