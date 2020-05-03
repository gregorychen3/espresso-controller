package relay

import "github.com/stianeikeland/go-rpio/v4"

type Relay struct {
	pin rpio.Pin
}

func NewRelay(relayPinNum int) *Relay {
	pin := rpio.Pin(relayPinNum)
	return &Relay{pin: pin}
}

func (r *Relay) Run() error {
	if err := rpio.Open(); err != nil {
		return err
	}
	r.pin.Output()
	return nil
}

func (r *Relay) Shutdown() error {
	return rpio.Close()
}

func (r *Relay) HeatOn() {
	r.pin.High()
}

func (r *Relay) HeatOff() {
	r.pin.Low()
}
