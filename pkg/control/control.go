package control

import (
	"time"
)

type TargetTemperature struct {
	Value float32
	SetAt time.Time
}
