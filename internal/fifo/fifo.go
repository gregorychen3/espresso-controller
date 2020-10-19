package fifo

type FIFO struct {
	maxSize int
	data    []float32
}

func NewFIFO(maxSize int) FIFO {
	return FIFO{
		maxSize: maxSize,
		data:    make([]float32, 0, maxSize),
	}
}

func (f *FIFO) Push(val float32) {
	if len(f.data) < f.maxSize {
		f.data = append(f.data, val)
	} else {
		f.data = append(f.data[1:], val)
	}
}

func (f *FIFO) Sum() float32 {
	sum := float32(0.0)
	for _, v := range f.data {
		sum += v
	}
	return sum
}

func (f *FIFO) Average() float32 {
	if len(f.data) == 0 {
		return 0
	}
	return f.Sum() / float32(len(f.data))
}

func (f *FIFO) Size() int {
	return len(f.data)
}

func (f *FIFO) First() float32 {
	if len(f.data) == 0 {
		return 0
	}
	return f.data[0]
}

func (f *FIFO) Last() float32 {
	if len(f.data) == 0 {
		return 0
	}
	return f.data[len(f.data)-1]
}
