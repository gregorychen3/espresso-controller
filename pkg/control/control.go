package control

import (
	"time"
)

type TargetTemperature struct {
	Value float64
	SetAt time.Time
}
