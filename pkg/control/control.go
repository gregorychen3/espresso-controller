package control

import "time"

type Strategy interface {
	GetCurrentTemperature() TemperatureSample
	GetTemperatureHistory() []TemperatureSample
	GetSetPoint() SetPoint
	SetSetPoint(temperature float32) SetPoint
}

type SetPoint struct {
	Temperature float32
	SetAt       time.Time
}

type TemperatureSample struct {
	Value      float32
	ObservedAt time.Time
}
