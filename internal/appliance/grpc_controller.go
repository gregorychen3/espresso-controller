package appliance

import (
	"context"

	"github.com/golang/protobuf/ptypes"
	"github.com/gregorychen3/espresso-controller/internal/appliance/pid"
	"github.com/gregorychen3/espresso-controller/pkg/appliancepb"
	"github.com/gregorychen3/espresso-controller/pkg/control"
	"github.com/pkg/errors"
)

type grpcController struct {
	c               Configuration
	temperatureCtrl control.Strategy
}

func newGrpcController(c Configuration) (*grpcController, error) {
	pid := pid.NewPID()
	if err := pid.Run(); err != nil {
		return nil, errors.Wrap(err, "Failed to start temperature controller")
	}

	return &grpcController{
		c:               c,
		temperatureCtrl: pid,
	}, nil
}

func (c *grpcController) GetCurrentTemperature(context.Context, *appliancepb.GetCurrentTemperatureRequest) (*appliancepb.GetCurrentTemperatureResponse, error) {
	sample := c.temperatureCtrl.GetCurrentTemperature()

	pbTime, err := ptypes.TimestampProto(sample.ObservedAt)
	if err != nil {
		return nil, err
	}

	return &appliancepb.GetCurrentTemperatureResponse{
		Sample: &appliancepb.TemperatureSample{
			Value:      sample.Value,
			ObservedAt: pbTime,
		},
	}, nil
}

func (c *grpcController) GetTemperatureHistory(context.Context, *appliancepb.GetTemperatureHistoryRequest) (*appliancepb.GetTemperatureHistoryResponse, error) {
	samples := c.temperatureCtrl.GetTemperatureHistory()

	var pbSamples []*appliancepb.TemperatureSample
	for _, s := range samples {
		pbTime, err := ptypes.TimestampProto(s.ObservedAt)
		if err != nil {
			return nil, err
		}
		pbSample := appliancepb.TemperatureSample{
			Value:      s.Value,
			ObservedAt: pbTime,
		}
		pbSamples = append(pbSamples, &pbSample)
	}

	return &appliancepb.GetTemperatureHistoryResponse{
		Samples: pbSamples,
	}, nil
}

func (c *grpcController) GetTargetTemperature(context.Context, *appliancepb.GetTargetTemperatureRequest) (*appliancepb.GetTargetTemperatureResponse, error) {
	setPoint := c.temperatureCtrl.GetSetPoint()

	pbTime, err := ptypes.TimestampProto(setPoint.SetAt)
	if err != nil {
		return nil, err
	}

	return &appliancepb.GetTargetTemperatureResponse{
		Temperature: setPoint.Temperature,
		SetAt:       pbTime,
	}, nil
}

func (c *grpcController) SetTargetTemperature(ctx context.Context, req *appliancepb.SetTargetTemperatureRequest) (*appliancepb.SetTargetTemperatureResponse, error) {
	setPoint := c.temperatureCtrl.SetSetPoint(req.Temperature)

	pbTime, err := ptypes.TimestampProto(setPoint.SetAt)
	if err != nil {
		return nil, err
	}

	return &appliancepb.SetTargetTemperatureResponse{
		Temperature: setPoint.Temperature,
		SetAt:       pbTime,
	}, nil
}
