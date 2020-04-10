package appliance

import (
	"fmt"
	"net"

	"github.com/gregorychen3/espresso-controller/internal/log"
	"github.com/gregorychen3/espresso-controller/pkg/appliancepb"
	"github.com/pkg/errors"
	"github.com/soheilhy/cmux"
	"go.uber.org/zap"
	"golang.org/x/sync/errgroup"
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
		return errors.Wrap(err, fmt.Sprintf("failed to listen on port %d", s.c.Port))
	}

	mux := cmux.New(listener)
	grpcListener := mux.MatchWithWriters(cmux.HTTP2MatchHeaderFieldPrefixSendSettings("content-type", "application/grpc"))
	//http1Listener := mux.Match(cmux.HTTP1())

	eg := errgroup.Group{}
	eg.Go(func() error { return s.serveGRPC(grpcListener, grpcServer) })
	//eg.Go(func() error { return s.serveHTTP1(http1Listener, grpcServer) })
	eg.Go(func() error { return mux.Serve() })
	if err := eg.Wait(); err != nil {
		return err
	}
	return nil
	//	return grpcServer.Serve(listener)
}

func (s *Server) serveGRPC(listener net.Listener, grpcServer *grpc.Server) error {
	log.Info("Initializing gRPC server", zap.Int("port", s.c.Port))
	if err := grpcServer.Serve(listener); err != nil {
		return errors.Wrap(err, "gRPC server failed")
	}
	return nil
}

func (s *Server) serveHTTP1(listener net.Listener, grpcServer *grpc.Server) error {
	log.Info("Initializing http1 web server", zap.Int("port", s.c.Port))
	// TODO
	return nil
}
