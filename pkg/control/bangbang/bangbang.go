package bangbang

import (
	"sync"
	"time"

	"github.com/gregorychen3/espresso-controller/internal/appliance/heating_element"
	"github.com/gregorychen3/espresso-controller/internal/appliance/temperature"
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
	targetTemperature control.TargetTemperature

	heatingElement     heating_element.HeatingElement
	temperatureSampler temperature.TemperatureSampler

	temperatureHistoryMu sync.RWMutex
	temperatureHistory   []*control.TemperatureSample
}

func NewBangbang(heatingElem heating_element.HeatingElement, sampler temperature.TemperatureSampler) (*Bangbang, error) {
	return &Bangbang{
		targetTemperature:  control.TargetTemperature{Value: 93, SetAt: time.Now()},
		heatingElement:     heatingElem,
		temperatureSampler: sampler,
	}, nil
}

func (p *Bangbang) Run() error {
	// sample temperature on interval
	go func() {
		for {
			sample, err := p.sampleTemperature()
			if err != nil {
				log.Error("Failed to sample temperature", zap.Error(err))
				time.Sleep(time.Second)
				continue
			}

			p.temperatureHistoryMu.Lock()
			p.temperatureHistory = append(p.temperatureHistory, sample)
			p.temperatureHistoryMu.Unlock()

			if sample.Value < p.GetTargetTemperature().Value-2 {
				log.Debug("Switching heating element on", zap.Float64("curTemperature", sample.Value), zap.Float64("targetTemperature", p.GetTargetTemperature().Value))
				p.heatingElement.HeatOn()
			} else {
				log.Debug("Switching heating element off", zap.Float64("curTemperature", sample.Value), zap.Float64("targetTemperature", p.GetTargetTemperature().Value))
				p.heatingElement.HeatOff()
			}

			time.Sleep(time.Second)
		}
	}()

	// prune temperature history on interval
	go func() {
		for {
			p.temperatureHistoryMu.Lock()
			for i := len(p.temperatureHistory) - 1; i >= 0; i-- {
				if time.Since(p.temperatureHistory[i].ObservedAt) > time.Hour*1 { // keep 1hr of history
					p.temperatureHistory = p.temperatureHistory[i+1:]
					log.Debug("Pruned temperature history", zap.Int("numPruned", i+1), zap.Int("numRemaining", len(p.temperatureHistory)))
					break
				}
			}
			p.temperatureHistoryMu.Unlock()
			time.Sleep(10 * time.Minute)
		}
	}()

	return nil
}

func (p *Bangbang) GetCurrentTemperature() *control.TemperatureSample {
	p.temperatureHistoryMu.RLock()
	defer p.temperatureHistoryMu.RUnlock()

	return p.temperatureHistory[len(p.temperatureHistory)-1]
}

func (p *Bangbang) GetTemperatureHistory() []*control.TemperatureSample {
	p.temperatureHistoryMu.RLock()
	defer p.temperatureHistoryMu.RUnlock()

	return p.temperatureHistory
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

func (p *Bangbang) sampleTemperature() (*control.TemperatureSample, error) {
	temperature, err := p.temperatureSampler.Sample()
	if err != nil {
		return nil, err
	}

	log.Debug("Sampled boiler temperature", zap.Float64("temperature", temperature))
	return &control.TemperatureSample{Value: temperature, ObservedAt: time.Now()}, nil
}

func (p *Bangbang) Shutdown() error {
	return nil
}
