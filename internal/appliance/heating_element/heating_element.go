package heating_element

type HeatingElement interface {
	Run() error
	Shutdown() error

	HeatOn()
	HeatOff()
}
