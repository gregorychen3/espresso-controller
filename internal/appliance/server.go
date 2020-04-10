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
	return s.serveTCP()
}

func (s *Server) serveTCP() error {
	grpcController := newGrpcController(s.c)
	grpcServer := grpc.NewServer( /*TODO: logging interceptors*/ )
	appliancepb.RegisterApplianceServer(grpcServer, grpcController)

	listener, err := net.Listen("tcp", fmt.Sprintf(":%d", s.c.Port))
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}

	return grpcServer.Serve(listener)
}
