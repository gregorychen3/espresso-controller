package temperature

import "time"

type Sample struct {
	Value      float64
	ObservedAt time.Time
}

type Sampler interface {
	Sample() (float64, error)
}
