package espresso

import (
	"context"

	"github.com/golang/protobuf/ptypes"
	"github.com/gregorychen3/espresso-controller/internal/espresso/heating_element"
	"github.com/gregorychen3/espresso-controller/internal/espresso/temperature"
	"github.com/gregorychen3/espresso-controller/pkg/control"
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

type TemperatureController interface {
	control.Strategy
	Shutdown() error
}

type grpcController struct {
	c                      Configuration
	boilerTemperatureCtrlr TemperatureController
	groupMonitor           *temperature.Monitor
	boilerMonitor          *temperature.Monitor
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
		c:                      c,
		boilerTemperatureCtrlr: temperatureCtrlr,
		groupMonitor:           groupMonitor,
		boilerMonitor:          boilerMonitor,
	}, nil
}

func (c *grpcController) GroupHeadTemperature(req *espressopb.TemperatureStreamRequest, stream espressopb.Espresso_GroupHeadTemperatureServer) error {
	grpcStreams.Inc()
	defer grpcStreams.Dec()

	// the first message sent on the stream is the temperature history
	var pbSamples []*espressopb.TemperatureSample
	samples := c.groupMonitor.GetHistory()
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
	subId, subCh := c.groupMonitor.Subscribe()
	defer c.groupMonitor.Unsubscribe(subId)
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

func (c *grpcController) GetTargetTemperature(context.Context, *espressopb.GetTargetTemperatureRequest) (*espressopb.GetTargetTemperatureResponse, error) {
	targetTemperature := c.boilerTemperatureCtrlr.GetTargetTemperature()

	pbTime, err := ptypes.TimestampProto(targetTemperature.SetAt)
	if err != nil {
		return nil, err
	}

	return &espressopb.GetTargetTemperatureResponse{
		Temperature: targetTemperature.Value,
		SetAt:       pbTime,
	}, nil
}

func (c *grpcController) SetTargetTemperature(ctx context.Context, req *espressopb.SetTargetTemperatureRequest) (*espressopb.SetTargetTemperatureResponse, error) {
	if req.Temperature < 0 || req.Temperature > 100 {
		return nil, errors.New("temperature must be in range [0, 100] °C")
	}

	targetTemperature := c.boilerTemperatureCtrlr.SetTargetTemperature(req.Temperature)
	pbTime, err := ptypes.TimestampProto(targetTemperature.SetAt)
	if err != nil {
		return nil, err
	}
	return &espressopb.SetTargetTemperatureResponse{
		Temperature: targetTemperature.Value,
		SetAt:       pbTime,
	}, nil
}

func (c *grpcController) Shutdown() error {
	return c.boilerTemperatureCtrlr.Shutdown()
}
