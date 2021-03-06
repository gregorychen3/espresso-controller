package temperature

import (
	"sync"
	"time"

	"github.com/google/uuid"

	"github.com/gregorychen3/espresso-controller/internal/log"
	"go.uber.org/zap"
)

type Sample struct {
	Value      float32
	ObservedAt time.Time
}

type Sampler interface {
	Sample() (*Sample, error)
}

type Monitor struct {
	subscriptionsMu sync.RWMutex
	subscriptions   map[uuid.UUID]chan *Sample

	sampler              Sampler
	temperatureHistoryMu sync.RWMutex
	temperatureHistory   []*Sample
}

func NewMonitor(sampler Sampler, sampleRate time.Duration) *Monitor {
	return &Monitor{
		subscriptions: map[uuid.UUID]chan *Sample{},
		sampler:       sampler,
	}
}

func (m *Monitor) Run() {
	// sample temperature on interval
	go func() {
		for {
			sample, err := m.sampler.Sample()
			if err != nil {
				log.Error("Failed to sample temperature", zap.Error(err))
				time.Sleep(time.Second)
				continue
			}

			m.temperatureHistoryMu.Lock()
			m.temperatureHistory = append(m.temperatureHistory, sample)
			m.temperatureHistoryMu.Unlock()

			m.subscriptionsMu.RLock()
			for _, ch := range m.subscriptions {
				ch <- sample
			}
			m.subscriptionsMu.RUnlock()

			time.Sleep(time.Second)
		}
	}()

	// prune temperature history on interval
	go func() {
		for {
			m.temperatureHistoryMu.Lock()
			for i := len(m.temperatureHistory) - 1; i >= 0; i-- {
				if time.Since(m.temperatureHistory[i].ObservedAt) > time.Minute*30 { // keep 30 mins of history
					m.temperatureHistory = m.temperatureHistory[i+1:]
					log.Debug("Pruned temperature history", zap.Int("numPruned", i+1), zap.Int("numRemaining", len(m.temperatureHistory)))
					break
				}
			}
			m.temperatureHistoryMu.Unlock()
			time.Sleep(1 * time.Minute)
		}
	}()
}

func (m *Monitor) Subscribe() (uuid.UUID, chan *Sample) {
	m.subscriptionsMu.Lock()
	defer m.subscriptionsMu.Unlock()

	subId := uuid.New()
	subscriptionCh := make(chan *Sample)
	m.subscriptions[subId] = subscriptionCh

	return subId, subscriptionCh
}

func (m *Monitor) Unsubscribe(subId uuid.UUID) {
	m.subscriptionsMu.Lock()
	defer m.subscriptionsMu.Unlock()

	delete(m.subscriptions, subId)
}

func (m *Monitor) GetHistory() []*Sample {
	m.temperatureHistoryMu.RLock()
	defer m.temperatureHistoryMu.RUnlock()
	return m.temperatureHistory
}
