package metrics

import (
	"time"

	"github.com/armon/go-metrics"
	"github.com/armon/go-metrics/prometheus"
	"github.com/gregorychen3/espresso-controller/internal/log"
	"github.com/shirou/gopsutil/cpu"
	"github.com/shirou/gopsutil/mem"
	"go.uber.org/zap"
)

var (
	metricKeyMemUtilizationRatio = []string{"node_mem_utilization_ratio"}
	metricKeyCPUUtilizationRatio = []string{"node_cpu_utilization_ratio"}
)

// InitMetrics creates a prometheus sink
func InitMetrics() error {
	log.Info("Configurting prometheus metrics sink")
	promSink, err := prometheus.NewPrometheusSinkFrom(prometheus.PrometheusOpts{Expiration: time.Hour * 24})
	if err != nil {
		return err
	}

	m, err := metrics.NewGlobal(metrics.DefaultConfig("espresso"), promSink)
	if err != nil {
		return err
	}
	m.EnableHostname = false

	return nil
}

// CollectSystemMetrics for collecting system-level metrics on-demand (e.g., at prometheus scrape-time)
func CollectSystemMetrics() {
	memStats, err := mem.VirtualMemory()
	if err != nil {
		log.Error("Collecting system memory utilization metrics", zap.Error(err))
	}
	metrics.SetGauge(metricKeyMemUtilizationRatio, float32(memStats.UsedPercent/100))

	cpuStats, err := cpu.Percent(0, false)
	if err != nil {
		log.Error("Collecting system cpu utilization metrics", zap.Error(err))
	}
	metrics.SetGauge(metricKeyCPUUtilizationRatio, float32(cpuStats[0]/100))
}
