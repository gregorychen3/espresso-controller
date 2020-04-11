package pid

import "time"

type SetPoint struct {
	Temperature float32
	SetAt       time.Time
}

type TemperatureSample struct {
	Temperature float32
	ObservedAt  time.Time
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

func (p *PID) GetCurrentTemperature() TemperatureSample {
	return TemperatureSample{Temperature: 21.5, ObservedAt: time.Now()}
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
