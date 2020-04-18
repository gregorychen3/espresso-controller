package metrics

import (
	"os/exec"
	"strconv"
	"time"

	"github.com/armon/go-metrics"
	"github.com/armon/go-metrics/prometheus"
	"github.com/gregorychen3/espresso-controller/internal/log"
	"github.com/shirou/gopsutil/cpu"
	"github.com/shirou/gopsutil/mem"
	"go.uber.org/zap"
)

var (
	metricKeyMemUtilizationRatio = []string{"raspi_mem_utilization_ratio"}
	metricKeyCPUUtilizationRatio = []string{"raspi_cpu_utilization_ratio"}
	metricKeyRaspiGPUTemperature = []string{"raspi_gpu_temperature"}
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
		log.Error("Failed to collect system memory utilization metrics", zap.Error(err))
	} else {
		metrics.SetGauge(metricKeyMemUtilizationRatio, float32(memStats.UsedPercent/100))
	}

	cpuStats, err := cpu.Percent(0, false)
	if err != nil {
		log.Error("Failed to collect system cpu utilization metrics", zap.Error(err))
	} else {
		metrics.SetGauge(metricKeyCPUUtilizationRatio, float32(cpuStats[0]/100))
	}

	gpuTemperature, err := sampleRaspiGPUTemperature()
	if err != nil {
		log.Error("Failed to sample raspi gpu temperature", zap.Error(err))
	} else {
		metrics.SetGauge(metricKeyCPUUtilizationRatio, gpuTemperature)
	}
}

func sampleRaspiGPUTemperature() (float32, error) {
	outBytes, err := exec.Command("vcgencmd measure_temp").Output()
	if err != nil {
		return 0, nil
	}

	temperature64, err := strconv.ParseFloat(string(outBytes), 32)
	if err != nil {
		return 0, err
	}

	return float32(temperature64), nil
}
