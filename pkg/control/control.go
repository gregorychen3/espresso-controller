package control

import (
	"time"
)

type Strategy interface {
	GetTargetTemperature() TargetTemperature
	SetTargetTemperature(temperature float64) TargetTemperature
}

type TargetTemperature struct {
	Value float64
	SetAt time.Time
}
