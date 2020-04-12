package control

import "time"

type Strategy interface {
	GetCurrentTemperature() TemperatureSample
	GetTemperatureHistory() []TemperatureSample
	GetTargetTemperature() TargetTemperature
	SetTargetTemperature(temperature float32) TargetTemperature
}

type TargetTemperature struct {
	Value float32
	SetAt time.Time
}

type TemperatureSample struct {
	Value      float32
	ObservedAt time.Time
}
