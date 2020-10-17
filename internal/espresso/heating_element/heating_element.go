package heating_element

import (
	"time"

	"github.com/stianeikeland/go-rpio/v4"
)

type HeatingElement struct {
	relayPin   rpio.Pin
	dutyFactor float32
}

func NewHeatingElement(relayPinNum int) *HeatingElement {
	relayPin := rpio.Pin(relayPinNum)
	relayPin.Output()

	return &HeatingElement{
		relayPin:   relayPin,
		dutyFactor: 0,
	}
}

func (h *HeatingElement) Run() {
	go func() {
		for {
			h.relayPin.High()
			ms := int(h.dutyFactor * 1000)
			time.Sleep(time.Duration(ms) * time.Millisecond)
			h.relayPin.Low()
		}
	}()
}

func (h *HeatingElement) SetDutyFactor(factor float32) {
	h.dutyFactor = factor
}

func (h *HeatingElement) Shutdown() {
	h.relayPin.Low()
}
