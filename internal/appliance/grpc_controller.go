package appliance

type grpcController struct {
	c Configuration
}

func newGrpcController(c Configuration) *grpcController {
	return &grpcController{c: c}
}
