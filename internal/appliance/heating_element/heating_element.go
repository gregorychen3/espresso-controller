package heating_element

type HeatingElement interface {
	Run() error
	HeatOn()
	HeatOff()
}
