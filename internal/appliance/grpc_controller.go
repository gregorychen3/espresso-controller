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
	return &appliancepb.GetCurrentTemperatureResponse{
		Temperature: 21.5,
	}, nil
}

func (c *grpcController) GetTargetTemperature(context.Context, *appliancepb.GetTargetTemperatureRequest) (*appliancepb.GetTargetTemperatureResponse, error) {
	return &appliancepb.GetTargetTemperatureResponse{
		Temperature: 93,
	}, nil
}

func (c *grpcController) SetTargetTemperature(ctx context.Context, req *appliancepb.SetTargetTemperatureRequest) (*appliancepb.SetTargetTemperatureResponse, error) {
	return &appliancepb.SetTargetTemperatureResponse{
		Temperature: req.Temperature,
	}, nil
}
