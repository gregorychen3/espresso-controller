package control

import (
	"time"

	"github.com/gregorychen3/espresso-controller/internal/appliance/temperature"
)

type Strategy interface {
	GetCurrentTemperature() *temperature.TemperatureSample
	GetTemperatureHistory() []*temperature.TemperatureSample

	GetTargetTemperature() TargetTemperature
	SetTargetTemperature(temperature float64) TargetTemperature
}

type TargetTemperature struct {
	Value float64
	SetAt time.Time
}
