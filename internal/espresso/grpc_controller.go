package espresso

import (
	"context"

	"github.com/golang/protobuf/ptypes"
	"github.com/gregorychen3/espresso-controller/internal/espresso/heating_element"
	"github.com/gregorychen3/espresso-controller/internal/espresso/temperature"
	"github.com/gregorychen3/espresso-controller/pkg/control/pid"
	"github.com/gregorychen3/espresso-controller/pkg/espressopb"
	"github.com/pkg/errors"
	"github.com/prometheus/client_golang/prometheus"
	"github.com/prometheus/client_golang/prometheus/promauto"
)

var (
	grpcStreams = promauto.NewGauge(prometheus.GaugeOpts{
		Name: "espresso_grpc_streams",
		Help: "Number of streaming rpcs currently being serviced",
	})
)

type grpcController struct {
	c             Configuration
	pid           *pid.PID
	groupMonitor  *temperature.Monitor
	boilerMonitor *temperature.Monitor
}

func newGrpcController(
	c Configuration,
	heatingElem *heating_element.HeatingElement,
	boilerMonitor *temperature.Monitor,
	groupMonitor *temperature.Monitor,
) (*grpcController, error) {
	temperatureCtrlr, err := pid.NewPid(heatingElem, boilerMonitor)
	if err != nil {
		return nil, err
	}

	if err := temperatureCtrlr.Run(); err != nil {
		return nil, errors.Wrap(err, "Failed to start temperature controller")
	}

	return &grpcController{
		c:             c,
		pid:           temperatureCtrlr,
		groupMonitor:  groupMonitor,
		boilerMonitor: boilerMonitor,
	}, nil
}

func (c *grpcController) BoilerTemperature(req *espressopb.TemperatureStreamRequest, stream espressopb.Espresso_BoilerTemperatureServer) error {
	grpcStreams.Inc()
	defer grpcStreams.Dec()

	// the first message sent on the stream is the temperature history
	var pbSamples []*espressopb.TemperatureSample
	samples := c.boilerMonitor.GetHistory()
	for _, s := range samples {
		pbTime, err := ptypes.TimestampProto(s.ObservedAt)
		if err != nil {
			return err
		}
		pbSample := espressopb.TemperatureSample{
			Value:      s.Value,
			ObservedAt: pbTime,
		}
		pbSamples = append(pbSamples, &pbSample)
	}

	if err := stream.Send(&espressopb.TemperatureStreamResponse{
		Data: &espressopb.TemperatureStreamResponse_History{
			History: &espressopb.TemperatureHistory{
				Samples: pbSamples,
			},
		},
	}); err != nil {
		return err
	}

	// send a current sample every second
	subId, subCh := c.boilerMonitor.Subscribe()
	defer c.boilerMonitor.Unsubscribe(subId)
	for sample := range subCh {
		pbTime, err := ptypes.TimestampProto(sample.ObservedAt)
		if err != nil {
			return err
		}
		if err := stream.Send(&espressopb.TemperatureStreamResponse{
			Data: &espressopb.TemperatureStreamResponse_Sample{
				Sample: &espressopb.TemperatureSample{
					Value:      sample.Value,
					ObservedAt: pbTime,
				},
			},
		}); err != nil {
			return err
		}
	}
	return errors.New("temperature monitor stopped publishing")
}

func (c *grpcController) GetConfiguration(ctx context.Context, req *espressopb.GetConfigurationRequest) (*espressopb.Configuration, error) {
	targetTemperature := c.pid.GetTargetTemperature()

	pbTime, err := ptypes.TimestampProto(targetTemperature.SetAt)
	if err != nil {
		return nil, err
	}

	return &espressopb.Configuration{
		Temperature: targetTemperature.Value,
		P:           c.pid.P,
		I:           c.pid.I,
		D:           c.pid.D,
		SetAt:       pbTime,
	}, nil
}

func (c *grpcController) SetConfiguration(ctx context.Context, req *espressopb.Configuration) (*espressopb.Configuration, error) {
	if req.Temperature < 0 || req.Temperature > 140 {
		return nil, errors.New("temperature must be in range [0, 140] °C")
	}

	if req.P < 0 || req.D < 0 {
		return nil, errors.New("pid terms must be > 0")
	}

	targetTemperature := c.pid.SetTargetTemperature(req.Temperature)

	pbTime, err := ptypes.TimestampProto(targetTemperature.SetAt)
	if err != nil {
		return nil, err
	}

	c.pid.P = req.P
	c.pid.I = req.I
	c.pid.D = req.D

	return &espressopb.Configuration{
		Temperature: targetTemperature.Value,
		P:           c.pid.P,
		I:           c.pid.I,
		D:           c.pid.D,
		SetAt:       pbTime,
	}, nil
}

func (c *grpcController) Shutdown() error {
	return c.pid.Shutdown()
}
