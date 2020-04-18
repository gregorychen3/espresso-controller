package bangbang

import (
	"sync"
	"time"

	"github.com/gregorychen3/espresso-controller/internal/appliance/temperature"
	"github.com/gregorychen3/espresso-controller/internal/appliance/temperature/ds18b20"
	"github.com/gregorychen3/espresso-controller/internal/log"
	"github.com/gregorychen3/espresso-controller/pkg/control"
	"github.com/pkg/errors"
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

	temperatureSampler temperature.TemperatureSampler

	temperatureHistoryMu sync.RWMutex
	temperatureHistory   []*control.TemperatureSample
}

func NewBangbang() (*Bangbang, error) {
	sampler, err := ds18b20.NewDS18B20()
	if err != nil {
		return nil, errors.Wrap(err, "failed to initialize temperature sampler")
	}
	return &Bangbang{
		temperatureSampler: sampler,
		targetTemperature:  control.TargetTemperature{Value: 93, SetAt: time.Now()},
	}, nil
}

func (p *Bangbang) Run() error {
	go func() {
		for {
			sample, err := p.sampleTemperature()
			if err != nil {
				log.Error("Failed to sample temperature", zap.Error(err))
				time.Sleep(2 * time.Second)
				continue
			}

			p.temperatureHistoryMu.Lock()
			p.temperatureHistory = append(p.temperatureHistory, sample)
			p.temperatureHistoryMu.Unlock()

			if sample.Value < p.GetTargetTemperature().Value {
				log.Info("Switching heating element on", zap.Float64("curTemperature", sample.Value), zap.Float64("targetTemperature", p.GetTargetTemperature().Value))
				// TODO
			}

			if sample.Value > p.GetTargetTemperature().Value+1 {
				log.Info("Switching heating element off", zap.Float64("curTemperature", sample.Value), zap.Float64("targetTemperature", p.GetTargetTemperature().Value))
				// TODO
			}

			time.Sleep(2 * time.Second)
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

	log.Info("Temperature sampled", zap.Float64("temperature", temperature))
	return &control.TemperatureSample{Value: temperature, ObservedAt: time.Now()}, nil
}
