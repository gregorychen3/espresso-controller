package appliance

import (
	"context"

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
	curTemp := c.pidController.GetCurrentTemperature()
	return &appliancepb.GetCurrentTemperatureResponse{Temperature: curTemp}, nil
}

func (c *grpcController) GetTargetTemperature(context.Context, *appliancepb.GetTargetTemperatureRequest) (*appliancepb.GetTargetTemperatureResponse, error) {
	targetTemp := c.pidController.GetTargetTemperature()
	return &appliancepb.GetTargetTemperatureResponse{Temperature: targetTemp}, nil
}

func (c *grpcController) SetTargetTemperature(ctx context.Context, req *appliancepb.SetTargetTemperatureRequest) (*appliancepb.SetTargetTemperatureResponse, error) {
	c.pidController.SetTargetTemperature(req.Temperature)
	return &appliancepb.SetTargetTemperatureResponse{Temperature: req.Temperature}, nil
}
