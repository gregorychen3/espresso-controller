package bangbang

import (
	"math/rand"
	"sync"
	"time"

	"github.com/gregorychen3/espresso-controller/internal/log"
	"github.com/gregorychen3/espresso-controller/pkg/control"
	"go.uber.org/zap"
)

const (
	min float32 = 80.0
	max float32 = 100.0
)

// Bangbang is a temperature controller that implements bang-bang control. It
// satisfies the control.Strategy interface.
// https://en.wikipedia.org/wiki/Bang%E2%80%93bang_control
type Bangbang struct {
	targetTemperature control.TargetTemperature

	temperatureHistoryMu sync.RWMutex
	temperatureHistory   []control.TemperatureSample
}

func NewBangbang() *Bangbang {
	return &Bangbang{
		targetTemperature: control.TargetTemperature{
			Value: 93,
			SetAt: time.Now(),
		},
	}
}

func (p *Bangbang) Run() error {
	go func() {
		for {
			sample := p.sampleTemperature()
			p.temperatureHistoryMu.Lock()
			p.temperatureHistory = append(p.temperatureHistory, sample)
			p.temperatureHistoryMu.Unlock()

			if sample.Value < p.GetTargetTemperature().Value {
				log.Info("Switching heating element on", zap.Float32("curTemperature", sample.Value), zap.Float32("targetTemperature", p.GetTargetTemperature().Value))
				// TODO
			}

			if sample.Value > p.GetTargetTemperature().Value+1 {
				log.Info("Switching heating element off", zap.Float32("curTemperature", sample.Value), zap.Float32("targetTemperature", p.GetTargetTemperature().Value))
				// TODO
			}

			time.Sleep(5 * time.Second)
		}
	}()

	return nil
}

func (p *Bangbang) GetCurrentTemperature() control.TemperatureSample {
	p.temperatureHistoryMu.RLock()
	defer p.temperatureHistoryMu.RUnlock()

	return p.temperatureHistory[len(p.temperatureHistory)-1]
}

func (p *Bangbang) GetTemperatureHistory() []control.TemperatureSample {
	p.temperatureHistoryMu.RLock()
	defer p.temperatureHistoryMu.RUnlock()

	return p.temperatureHistory
}

func (p *Bangbang) GetTargetTemperature() control.TargetTemperature {
	return p.targetTemperature
}

func (p *Bangbang) SetTargetTemperature(temperature float32) control.TargetTemperature {
	targetTemperature := control.TargetTemperature{
		Value: temperature,
		SetAt: time.Now(),
	}
	p.targetTemperature = targetTemperature
	return targetTemperature
}

func (p *Bangbang) sampleTemperature() control.TemperatureSample {
	randTemp := min + rand.Float32()*(max-min)
	log.Debug("Temperature sampled", zap.Float32("temperature", randTemp))
	return control.TemperatureSample{Value: randTemp, ObservedAt: time.Now()}
}
