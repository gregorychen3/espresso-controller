package max31855

type Max31855 struct {
}

func NewMax31855() (*Max31855, error) {
	return &Max31855{}, nil
}

func (m *Max31855) Sample() (float64, error) {
	return 0, nil
}
