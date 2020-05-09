package max31855

import (
	"github.com/gregorychen3/espresso-controller/internal/appliance/temperature"
	"github.com/teebr/go-max31855"
)

type Max31855 struct {
	sensor max31855.MAX31855
}

func NewMax31855() (*Max31855, error) {
	var sensor max31855.MAX31855
	if err := sensor.Open("/dev/spidev0.0"); err != nil {
		return nil, err
	}
	return &Max31855{sensor: sensor}, nil
}

func (m *Max31855) Sample() (*temperature.Sample, error) {
	if err := m.sensor.Read(); err != nil {
		return nil, err
	}
	return &temperature.Sample{
		Value:      m.sensor.Thermocouple,
		ObservedAt: m.sensor.Timestamp,
	}, nil
}

func (m *Max31855) Shutdown() error {
	return m.sensor.Close()
}
