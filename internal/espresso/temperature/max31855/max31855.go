package max31855

import (
	"errors"
	"time"

	"github.com/gregorychen3/espresso-controller/internal/espresso/temperature"
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
	bits := m.read32Bits()
	if err := checkErr(bits); err != nil {
		return nil, err
	}
	return &temperature.Sample{
		Value:      bitsToTemperature(bits),
		ObservedAt: time.Now(),
	}, nil
}

func (m *Max31855) read32Bits() uint32 {
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

func bitsToTemperature(bits uint32) float32 {
	thermoData := ((bits >> 18) & 0x3FFF)
	if thermoData&0x2000 != 0 { // two's complement (untested!)
		withoutResolution := ^thermoData & 0x1FFF
		withoutResolution = withoutResolution + 1
		temp := int64(withoutResolution) * (-1)
		return float32(temp) / 4
	} else {
		withoutResolution := thermoData & 0x1FFF
		return float32(withoutResolution) / 4
	}
}

// checkErr as defined in https://datasheets.maximintegrated.com/en/ds/MAX31855.pdf
func checkErr(bits uint32) error {
	hasErr := (bits & 0x10000) != 0     // fault bit, D16
	openCircuit := (bits & 0b1) != 0    // OC bit, D0
	shortToGround := (bits & 0b10) != 0 // SCG bit, D1
	shortToVCC := (bits & 0b100) != 0   // SCV bit, D2

	if !hasErr {
		return nil
	}
	if openCircuit {
		return errors.New("open circuit")
	}
	if shortToGround {
		return errors.New("short to ground")
	}
	if shortToVCC {
		return errors.New("short to vcc")
	}
	return errors.New("unknown error")
}
