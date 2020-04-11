package pid

type PID struct {
	targetTemp float32
}

func NewPID() *PID {
	return &PID{}
}

func (p *PID) GetCurrentTemperature() float32 {
	return 21.5
}

func (p *PID) GetTargetTemperature() float32 {
	return p.targetTemp
}

func (p *PID) SetTargetTemperature(target float32) {
	p.targetTemp = target
}
