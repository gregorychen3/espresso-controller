package control

import "time"

type Strategy interface {
	GetCurrentTemperature() TemperatureSample
	GetTemperatureHistory() []TemperatureSample
	GetSetPoint() Setpoint
	SetSetPoint(temperature float32) Setpoint
}

type Setpoint struct {
	Temperature float32
	SetAt       time.Time
}

type TemperatureSample struct {
	Value      float32
	ObservedAt time.Time
}
