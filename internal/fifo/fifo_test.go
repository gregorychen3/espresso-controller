package fifo

import (
	"testing"
)

func TestFIFO_Sum(t *testing.T) {
	tests := []struct {
		name string
		data []float64
		want float64
	}{
		{
			name: "Sum empty fifo",
			data: []float64{},
			want: 0.0,
		},
		{
			name: "Sum single val fifo",
			data: []float64{1.2},
			want: 1.2,
		},
		{
			name: "Sum multiple val fifo",
			data: []float64{1.2, 3.4},
			want: 4.8,
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			f := NewFIFO(5)
			for _, v := range tt.data {
				f.Push(v)
			}
			if got := f.Sum(); got != tt.want {
				t.Errorf("FIFO.Sum() = %v, want %v", got, tt.want)
			}
		})
	}
}

func TestFIFO_Average(t *testing.T) {
	tests := []struct {
		name string
		data []float64
		want float64
	}{
		{
			name: "Average empty fifo",
			data: []float64{},
			want: 0.0,
		},
		{
			name: "Average single val fifo",
			data: []float64{1.2},
			want: 1.2,
		},
		{
			name: "Average multiple val fifo",
			data: []float64{1.2, 3.4},
			want: 2.3,
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			f := NewFIFO(5)
			for _, v := range tt.data {
				f.Push(v)
			}
			if got := f.Average(); got != tt.want {
				t.Errorf("FIFO.Average() = %v, want %v", got, tt.want)
			}
		})
	}
}
