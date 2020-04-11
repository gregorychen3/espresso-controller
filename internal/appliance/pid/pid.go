package pid

import (
	"math/rand"
	"time"
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
	return nil
}

func (p *PID) GetCurrentTemperature() TemperatureSample {
	var min float32 = 80.0
	var max float32 = 100.0
	randTemp := min + rand.Float32()*(max-min)
	return TemperatureSample{Value: randTemp, ObservedAt: time.Now()}
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
