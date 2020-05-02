package relay

import "github.com/stianeikeland/go-rpio/v4"

type Relay struct {
	pin rpio.Pin
}

func NewRelay(relayPinNum int) *Relay {
	return &Relay{pin: rpio.Pin(relayPinNum)}
}

func (r *Relay) Run() error {
	return rpio.Open()
}

func (r *Relay) On() {
	r.pin.High()
}

func (r *Relay) Off() {
	r.pin.Low()
}

func (r *Relay) Shutdown() error {
	return rpio.Close()
}
