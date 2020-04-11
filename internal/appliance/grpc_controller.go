package appliance

import (
	"context"

	"github.com/golang/protobuf/ptypes"
	"github.com/gregorychen3/espresso-controller/internal/appliance/pid"
	"github.com/gregorychen3/espresso-controller/pkg/appliancepb"
	"github.com/pkg/errors"
)

type grpcController struct {
	c             Configuration
	pidController *pid.PID
}

func newGrpcController(c Configuration) (*grpcController, error) {
	pid := pid.NewPID()
	if err := pid.Run(); err != nil {
		return nil, errors.Wrap(err, "Failed to start pid controller")
	}

	return &grpcController{
		c:             c,
		pidController: pid,
	}, nil
}

func (c *grpcController) GetCurrentTemperature(context.Context, *appliancepb.GetCurrentTemperatureRequest) (*appliancepb.GetCurrentTemperatureResponse, error) {
	sample := c.pidController.GetCurrentTemperature()

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
	return &appliancepb.GetTemperatureHistoryResponse{}, nil
}

func (c *grpcController) GetTargetTemperature(context.Context, *appliancepb.GetTargetTemperatureRequest) (*appliancepb.GetTargetTemperatureResponse, error) {
	setPoint := c.pidController.GetSetPoint()

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
	setPoint := c.pidController.SetSetPoint(req.Temperature)

	pbTime, err := ptypes.TimestampProto(setPoint.SetAt)
	if err != nil {
		return nil, err
	}

	return &appliancepb.SetTargetTemperatureResponse{
		Temperature: setPoint.Temperature,
		SetAt:       pbTime,
	}, nil
}
