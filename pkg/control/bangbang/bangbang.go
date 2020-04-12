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

type BangBang struct {
	setPoints []control.SetPoint

	temperatureHistoryMu sync.RWMutex
	temperatureHistory   []control.TemperatureSample
}

func NewPID() *BangBang {
	return &BangBang{
		setPoints: []control.SetPoint{{
			Temperature: 93,
			SetAt:       time.Now(),
		}},
	}
}

func (p *BangBang) Run() error {
	go func() {
		for {
			sample := p.sampleTemperature()
			p.temperatureHistoryMu.Lock()
			p.temperatureHistory = append(p.temperatureHistory, sample)
			p.temperatureHistoryMu.Unlock()
			time.Sleep(5 * time.Second)
		}
	}()

	return nil
}

func (p *BangBang) GetCurrentTemperature() control.TemperatureSample {
	p.temperatureHistoryMu.RLock()
	defer p.temperatureHistoryMu.RUnlock()

	return p.temperatureHistory[len(p.temperatureHistory)-1]
}

func (p *BangBang) GetTemperatureHistory() []control.TemperatureSample {
	p.temperatureHistoryMu.RLock()
	defer p.temperatureHistoryMu.RUnlock()

	return p.temperatureHistory
}

func (p *BangBang) GetSetPoint() control.SetPoint {
	return p.setPoints[len(p.setPoints)-1]
}

func (p *BangBang) SetSetPoint(temperature float32) control.SetPoint {
	setPoint := control.SetPoint{
		Temperature: temperature,
		SetAt:       time.Now(),
	}
	p.setPoints = append(p.setPoints, setPoint)
	return setPoint
}

func (p *BangBang) sampleTemperature() control.TemperatureSample {
	randTemp := min + rand.Float32()*(max-min)
	log.Debug("Temperature sampled", zap.Float32("temperature", randTemp))
	return control.TemperatureSample{Value: randTemp, ObservedAt: time.Now()}
}
