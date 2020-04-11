package appliance

import (
	"context"

	"github.com/golang/protobuf/ptypes"
	"github.com/gregorychen3/espresso-controller/internal/appliance/pid"
	"github.com/gregorychen3/espresso-controller/pkg/appliancepb"
)

type grpcController struct {
	c             Configuration
	pidController *pid.PID
}

func newGrpcController(c Configuration) *grpcController {
	return &grpcController{
		c:             c,
		pidController: pid.NewPID(),
	}
}

func (c *grpcController) GetCurrentTemperature(context.Context, *appliancepb.GetCurrentTemperatureRequest) (*appliancepb.GetCurrentTemperatureResponse, error) {
	sample := c.pidController.GetCurrentTemperature()

	pbTime, err := ptypes.TimestampProto(sample.ObservedAt)
	if err != nil {
		return nil, err
	}

	return &appliancepb.GetCurrentTemperatureResponse{
		Temperature: sample.Temperature,
		ObservedAt:  pbTime,
	}, nil
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
