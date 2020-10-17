package bangbang

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

// Bangbang is a temperature controller that implements bang-bang control. It
// satisfies the control.Strategy interface.
// https://en.wikipedia.org/wiki/Bang%E2%80%93bang_control
type Bangbang struct {
	targetTemperature  control.TargetTemperature
	heatingElement     *heating_element.HeatingElement
	temperatureMonitor *temperature.Monitor

	temperatureSubId uuid.UUID
}

func NewBangbang(heatingElem *heating_element.HeatingElement, sampler *temperature.Monitor) (*Bangbang, error) {
	return &Bangbang{
		targetTemperature:  control.TargetTemperature{Value: 93, SetAt: time.Now()},
		heatingElement:     heatingElem,
		temperatureMonitor: sampler,
	}, nil
}

func (p *Bangbang) Run() error {
	// adjust heating element on interval
	go func() {
		subId, subCh := p.temperatureMonitor.Subscribe()
		p.temperatureSubId = subId

		for sample := range subCh {
			if sample.Value < p.GetTargetTemperature().Value-1 {
				log.Debug("Switching heating element on", zap.Float64("curTemperature", sample.Value), zap.Float64("targetTemperature", p.GetTargetTemperature().Value))
				p.heatingElement.SetDutyFactor(0.5)
			} else {
				log.Debug("Switching heating element off", zap.Float64("curTemperature", sample.Value), zap.Float64("targetTemperature", p.GetTargetTemperature().Value))
				p.heatingElement.SetDutyFactor(0)
			}
		}
	}()
	return nil
}

func (p *Bangbang) GetTargetTemperature() control.TargetTemperature {
	return p.targetTemperature
}

func (p *Bangbang) SetTargetTemperature(temperature float64) control.TargetTemperature {
	targetTemperature := control.TargetTemperature{
		Value: temperature,
		SetAt: time.Now(),
	}
	p.targetTemperature = targetTemperature
	return targetTemperature
}

func (p *Bangbang) Shutdown() error {
	p.temperatureMonitor.Unsubscribe(p.temperatureSubId)
	return nil
}
