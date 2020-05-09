package temperature

import "time"

type TemperatureSample struct {
	Value      float64
	ObservedAt time.Time
}

type TemperatureSampler interface {
	Sample() (float64, error)
}
