package heating_element

import (
	"time"

	"github.com/stianeikeland/go-rpio/v4"
)

type HeatingElement struct {
	relayPin   rpio.Pin
	dutyFactor float64
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
			if h.dutyFactor == 0 {
				h.off()
				time.Sleep(1 * time.Second)
				continue
			}

			onMs := h.dutyFactor * 1000
			offMs := (1 - h.dutyFactor) * 1000

			h.on()
			time.Sleep(time.Duration(onMs) * time.Millisecond)
			h.off()
			time.Sleep(time.Duration(offMs) * time.Millisecond)
		}
	}()
}

func (h *HeatingElement) SetDutyFactor(factor float64) {
	if h.dutyFactor <= 0 {
		h.dutyFactor = 0
	} else if h.dutyFactor >= 1 {
		h.dutyFactor = 1
	} else {
		h.dutyFactor = factor
	}
}

func (h *HeatingElement) on() {
	h.relayPin.High()
}

func (h *HeatingElement) off() {
	h.relayPin.Low()
}

func (h *HeatingElement) Shutdown() {
	h.relayPin.Low()
}
