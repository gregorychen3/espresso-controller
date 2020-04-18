package ds18b20

import (
	"errors"

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
		return nil, errors.New("multiple DS18B20 found")
	}

	log.Info("Initialized DS18B20 sensor", zap.String("sensorID", sensors[0]))
	return &DS18B20{sensorID: sensors[0]}, nil
}

func (d *DS18B20) Sample() (float64, error) {
	temperature, err := ds18b20.Temperature(d.sensorID)
	if err != nil {
		return 0, err
	}
	return temperature, nil
}
