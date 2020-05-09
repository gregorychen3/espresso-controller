package ds18b20

import (
	"errors"
	"time"

	"github.com/gregorychen3/espresso-controller/internal/appliance/temperature"
	"github.com/gregorychen3/espresso-controller/internal/log"
	"github.com/yryz/ds18b20"
	"go.uber.org/zap"
)

type DS18B20 struct {
	sensorID string
}

func NewDS18B20() (*DS18B20, error) {
	sensors, err := ds18b20.Sensors()
	if err != nil {
		return nil, err
	}
	if len(sensors) > 1 {
		return nil, errors.New("multiple DS18B20 sensors found")
	}
	log.Info("Initialized DS18B20 sensor", zap.String("sensorID", sensors[0]))
	return &DS18B20{sensorID: sensors[0]}, nil
}

func (d *DS18B20) Sample() (*temperature.Sample, error) {
	t, err := ds18b20.Temperature(d.sensorID)
	if err != nil {
		return nil, err
	}
	return &temperature.Sample{
		Value:      t,
		ObservedAt: time.Now(),
	}, nil
}
