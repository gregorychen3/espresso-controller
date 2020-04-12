package control

import "time"

type SetPoint struct {
	Temperature float32
	SetAt       time.Time
}

type TemperatureSample struct {
	Value      float32
	ObservedAt time.Time
}
