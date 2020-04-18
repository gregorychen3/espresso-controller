package control

import "time"

type Strategy interface {
	GetCurrentTemperature() *TemperatureSample
	GetTemperatureHistory() []*TemperatureSample

	GetTargetTemperature() TargetTemperature
	SetTargetTemperature(temperature float64) TargetTemperature
}

type TargetTemperature struct {
	Value float64
	SetAt time.Time
}

type TemperatureSample struct {
	Value      float64
	ObservedAt time.Time
}
