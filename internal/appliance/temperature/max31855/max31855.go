package max31855

import (
	"time"

	"github.com/gregorychen3/espresso-controller/internal/appliance/temperature"
	"github.com/stianeikeland/go-rpio/v4"
)

const dataBitLength = 32

type Max31855 struct {
	cs   rpio.Pin
	clk  rpio.Pin
	miso rpio.Pin
}

func NewMax31855(csPin, clkPin, misoPin int) *Max31855 {
	c := Max31855{
		cs:   rpio.Pin(csPin),
		clk:  rpio.Pin(clkPin),
		miso: rpio.Pin(misoPin),
	}
	c.cs.Output()
	c.clk.Output()
	c.miso.Input()
	return &c
}

func (m *Max31855) Sample() (*temperature.Sample, error) {
	bits := m.readBits()
	return &temperature.Sample{
		Value:      bitsToTemperature(bits),
		ObservedAt: time.Now(),
	}, nil
}

func (m *Max31855) Shutdown() error {
	return nil
}

func (m *Max31855) readBits() uint32 {
	m.cs.Low()        // begin the read
	defer m.cs.High() // end the read

	var bits uint32
	for i := 0; i < dataBitLength; i++ {
		m.clk.High()
		bit := m.miso.Read()
		if bit == rpio.High {
			bits |= 0x1
		}
		if i != dataBitLength-1 { // shift left to get to the next bit to be read
			bits <<= 1
		}
		m.clk.Low() // pulse low, then high again to get the next bit
	}
	return bits
}

func bitsToTemperature(bits uint32) float64 {
	thermoData := ((bits >> 18) & 0x3FFF)
	if thermoData&0x2000 != 0 { // two's complement (untested!)
		withoutResolution := ^thermoData & 0x1FFF
		withoutResolution = withoutResolution + 1
		temp := int64(withoutResolution) * (-1)
		return float64(temp) / 4
	} else {
		withoutResolution := thermoData & 0x1FFF
		return float64(withoutResolution) / 4
	}
}
