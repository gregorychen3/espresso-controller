package appliance

import (
	"context"

	"github.com/gregorychen3/espresso-controller/pkg/appliancepb"
)

type grpcController struct {
	c Configuration
}

func newGrpcController(c Configuration) *grpcController {
	return &grpcController{c: c}
}

func (c *grpcController) GetCurrentTemperature(context.Context, *appliancepb.GetCurrentTemperatureRequest) (*appliancepb.GetCurrentTemperatureResponse, error) {
	return &appliancepb.GetCurrentTemperatureResponse{}, nil
}

func (c *grpcController) GetTargetTemperature(context.Context, *appliancepb.GetTargetTemperatureRequest) (*appliancepb.GetTargetTemperatureResponse, error) {
	return &appliancepb.GetTargetTemperatureResponse{}, nil
}

func (c *grpcController) SetTargetTemperature(context.Context, *appliancepb.SetTargetTemperatureRequest) (*appliancepb.SetTargetTemperatureResponse, error) {
	return &appliancepb.SetTargetTemperatureResponse{}, nil
}
