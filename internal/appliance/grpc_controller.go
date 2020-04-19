package appliance

import (
	"context"

	"github.com/golang/protobuf/ptypes"
	"github.com/gregorychen3/espresso-controller/pkg/appliancepb"
	"github.com/gregorychen3/espresso-controller/pkg/control"
	"github.com/gregorychen3/espresso-controller/pkg/control/bangbang"
	"github.com/pkg/errors"
)

type grpcController struct {
	c                      Configuration
	boilerTemperatureCtrlr control.Strategy
}

func newGrpcController(c Configuration) (*grpcController, error) {
	temperatureCtrlr, err := bangbang.NewBangbang()
	if err != nil {
		return nil, err
	}

	if err := temperatureCtrlr.Run(); err != nil {
		return nil, errors.Wrap(err, "Failed to start temperature controller")
	}

	return &grpcController{
		c:                      c,
		boilerTemperatureCtrlr: temperatureCtrlr,
	}, nil
}

func (c *grpcController) GetCurrentTemperature(context.Context, *appliancepb.GetCurrentTemperatureRequest) (*appliancepb.GetCurrentTemperatureResponse, error) {
	sample := c.boilerTemperatureCtrlr.GetCurrentTemperature()

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

func (c *grpcController) GetBoilerTemperatureHistory(context.Context, *appliancepb.GetBoilerTemperatureHistoryRequest) (*appliancepb.GetBoilerTemperatureHistoryResponse, error) {
	samples := c.boilerTemperatureCtrlr.GetTemperatureHistory()

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

	return &appliancepb.GetBoilerTemperatureHistoryResponse{
		Samples: pbSamples,
	}, nil
}

func (c *grpcController) GetTargetTemperature(context.Context, *appliancepb.GetTargetTemperatureRequest) (*appliancepb.GetTargetTemperatureResponse, error) {
	targetTemperature := c.boilerTemperatureCtrlr.GetTargetTemperature()

	pbTime, err := ptypes.TimestampProto(targetTemperature.SetAt)
	if err != nil {
		return nil, err
	}

	return &appliancepb.GetTargetTemperatureResponse{
		Temperature: targetTemperature.Value,
		SetAt:       pbTime,
	}, nil
}

func (c *grpcController) SetTargetTemperature(ctx context.Context, req *appliancepb.SetTargetTemperatureRequest) (*appliancepb.SetTargetTemperatureResponse, error) {
	targetTemperature := c.boilerTemperatureCtrlr.SetTargetTemperature(req.Temperature)

	pbTime, err := ptypes.TimestampProto(targetTemperature.SetAt)
	if err != nil {
		return nil, err
	}

	return &appliancepb.SetTargetTemperatureResponse{
		Temperature: targetTemperature.Value,
		SetAt:       pbTime,
	}, nil
}
