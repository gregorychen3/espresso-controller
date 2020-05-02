package relay

type Relay struct{}

func NewRelay(relayPinNum int) *Relay {
	return &Relay{}
}

func (r *Relay) On() error {
	return nil
}

func (r *Relay) Off() error {
	return nil
}
