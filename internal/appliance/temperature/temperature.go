package temperature

type TemperatureSampler interface {
	Sample() (float64, error)
}
