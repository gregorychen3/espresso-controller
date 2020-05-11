package metrics

import (
	"io/ioutil"
	"os/exec"
	"strconv"
	"strings"

	"github.com/gregorychen3/espresso-controller/internal/log"
	"github.com/prometheus/client_golang/prometheus"
	"github.com/prometheus/client_golang/prometheus/promauto"
	"github.com/shirou/gopsutil/cpu"
	"github.com/shirou/gopsutil/mem"
	"go.uber.org/zap"
)

var (
	memUtilization = promauto.NewGauge(prometheus.GaugeOpts{
		Name: "espresso_raspi_mem_utilization_ratio",
		Help: "Raspberry pi memory utilization ratio",
	})
	cpuUtilization = promauto.NewGauge(prometheus.GaugeOpts{
		Name: "espresso_raspi_cpu_utilization_ratio",
		Help: "Raspberry pi cpu utilization ratio",
	})
	gpuTemperature = promauto.NewGauge(prometheus.GaugeOpts{
		Name: "espresso_raspi_gpu_temperature",
		Help: "Raspberry pi gpu temperature",
	})
	cpuTemperature = promauto.NewGauge(prometheus.GaugeOpts{
		Name: "espresso_raspi_cpu_temperature",
		Help: "Raspberry pi cpu temperature",
	})
)

// CollectSystemMetrics for collecting system-level metrics on-demand (e.g., at prometheus scrape-time)
func CollectSystemMetrics() {
	memStats, err := mem.VirtualMemory()
	if err != nil {
		log.Error("Failed to collect system memory utilization metrics", zap.Error(err))
	} else {
		sample := memStats.UsedPercent / 100
		memUtilization.Set(sample)
	}

	cpuStats, err := cpu.Percent(0, false)
	if err != nil {
		log.Error("Failed to collect system cpu utilization metrics", zap.Error(err))
	} else {
		sample := (cpuStats[0] / 100)
		cpuUtilization.Set(sample)
	}

	gpuTemperatureSample, err := sampleRaspiGPUTemperature()
	if err != nil {
		log.Error("Failed to sample gpu temperature", zap.Error(err))
	} else {
		gpuTemperature.Set(gpuTemperatureSample)
	}

	cpuTemperatureSample, err := sampleRaspiCPUTemperature()
	if err != nil {
		log.Error("Failed to sample cpu temperature", zap.Error(err))
	} else {
		cpuTemperature.Set(cpuTemperatureSample)
	}
}

func sampleRaspiGPUTemperature() (float64, error) {
	outBytes, err := exec.Command("/usr/bin/vcgencmd", "measure_temp").Output()
	if err != nil {
		return 0, err
	}

	temperature, err := strconv.ParseFloat(string(outBytes)[5:9], 32)
	if err != nil {
		return 0, err
	}
	return temperature, nil
}

func sampleRaspiCPUTemperature() (float64, error) {
	fileBytes, err := ioutil.ReadFile("/sys/class/thermal/thermal_zone0/temp")
	if err != nil {
		return 0, err
	}

	temperature, err := strconv.ParseFloat(strings.TrimSpace(string(fileBytes)), 64)
	if err != nil {
		return 0, err
	}
	return (temperature / 1000), nil
}
