package appliance

import (
	"fmt"
	"log"
	"net"

	"github.com/gregorychen3/espresso-controller/pkg/appliancepb"
	"google.golang.org/grpc"
)

type Configuration struct {
	Port int
}

type Server struct {
	c Configuration
}

func New(c Configuration) (*Server, error) {
	return &Server{c: c}, nil
}

func (s *Server) Run() error {
	listener, err := net.Listen("tcp", fmt.Sprintf(":%d", s.c.Port))
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}

	grpcServer := grpc.NewServer()
	grpcController := newGrpcController(s.c)
	appliancepb.RegisterApplianceServer(grpcServer, grpcController)

	return grpcServer.Serve(listener)
}
