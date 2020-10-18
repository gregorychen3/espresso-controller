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
	targetTemperature  control.TargetTemperature
	heatingElement     *heating_element.HeatingElement
	temperatureMonitor *temperature.Monitor

	temperatureSubId uuid.UUID
}

func NewPid(heatingElem *heating_element.HeatingElement, sampler *temperature.Monitor) (*PID, error) {
	return &PID{
		targetTemperature:  control.TargetTemperature{Value: 93, SetAt: time.Now()},
		heatingElement:     heatingElem,
		temperatureMonitor: sampler,
	}, nil
}

func (c *PID) Run() error {
	// adjust heating element on interval
	go func() {
		subId, subCh := c.temperatureMonitor.Subscribe()
		c.temperatureSubId = subId

		for sample := range subCh {
			if sample.Value < c.GetTargetTemperature().Value-1 {
				log.Debug("Setting duty factor", zap.Float32("dutyFactor", 0.5), zap.Float64("curTemperature", sample.Value), zap.Float64("targetTemperature", c.GetTargetTemperature().Value))
				c.heatingElement.SetDutyFactor(0.5)
			} else {
				log.Debug("Setting duty factor", zap.Float32("dutyFactor", 0), zap.Float64("curTemperature", sample.Value), zap.Float64("targetTemperature", c.GetTargetTemperature().Value))
				c.heatingElement.SetDutyFactor(0)
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
