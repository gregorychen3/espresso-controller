package fifo

type FIFO struct {
	maxSize int
	data    []float64
}

func NewFIFO(maxSize int) FIFO {
	return FIFO{
		maxSize: maxSize,
		data:    make([]float64, 0, maxSize),
	}
}

func (f *FIFO) Push(val float64) {
	if len(f.data) < f.maxSize {
		f.data = append(f.data, val)
	} else {
		f.data = append(f.data[1:], val)
	}
}

func (f *FIFO) Sum() float64 {
	sum := 0.0
	for _, v := range f.data {
		sum += v
	}
	return sum
}

func (f *FIFO) Average() float64 {
	if len(f.data) == 0 {
		return 0
	}
	return f.Sum() / float64(len(f.data))
}
