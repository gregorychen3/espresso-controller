package pid

import (
	"math/rand"
	"sync"
	"time"

	"github.com/gregorychen3/espresso-controller/internal/log"
	"go.uber.org/zap"
)

const (
	min float32 = 80.0
	max float32 = 100.0
)

type SetPoint struct {
	Temperature float32
	SetAt       time.Time
}

type TemperatureSample struct {
	Value      float32
	ObservedAt time.Time
}

type PID struct {
	setPoints []SetPoint

	temperatureHistoryMu sync.RWMutex
	temperatureHistory   []TemperatureSample
}

func NewPID() *PID {
	return &PID{
		setPoints: []SetPoint{{
			Temperature: 93,
			SetAt:       time.Now(),
		}},
	}
}

func (p *PID) Run() error {
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

func (p *PID) GetCurrentTemperature() TemperatureSample {
	p.temperatureHistoryMu.RLock()
	defer p.temperatureHistoryMu.RUnlock()

	return p.temperatureHistory[len(p.temperatureHistory)-1]
}

func (p *PID) GetSetPoint() SetPoint {
	return p.setPoints[len(p.setPoints)-1]
}

func (p *PID) SetSetPoint(temperature float32) SetPoint {
	setPoint := SetPoint{
		Temperature: temperature,
		SetAt:       time.Now(),
	}
	p.setPoints = append(p.setPoints, setPoint)
	return setPoint
}

func (p *PID) sampleTemperature() TemperatureSample {
	randTemp := min + rand.Float32()*(max-min)
	log.Debug("Sampled temperature", zap.Float32("temperature", randTemp))
	return TemperatureSample{Value: randTemp, ObservedAt: time.Now()}
}
