package relay

import "github.com/stianeikeland/go-rpio/v4"

type Relay struct {
	pin rpio.Pin
}

func NewRelay(relayPinNum int) *Relay {
	r := Relay{
		pin: rpio.Pin(relayPinNum),
	}
	r.pin.Output()
	r.HeatOff()
	return &r
}

func (r *Relay) HeatOn() {
	r.pin.High()
}

func (r *Relay) HeatOff() {
	r.pin.Low()
}
