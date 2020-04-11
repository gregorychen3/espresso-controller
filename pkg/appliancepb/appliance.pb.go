// Code generated by protoc-gen-go. DO NOT EDIT.
// source: appliance.proto

package appliancepb

import (
	context "context"
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
	timestamp "github.com/golang/protobuf/ptypes/timestamp"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
	math "math"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion3 // please upgrade the proto package

type GetCurrentTemperatureRequest struct {
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *GetCurrentTemperatureRequest) Reset()         { *m = GetCurrentTemperatureRequest{} }
func (m *GetCurrentTemperatureRequest) String() string { return proto.CompactTextString(m) }
func (*GetCurrentTemperatureRequest) ProtoMessage()    {}
func (*GetCurrentTemperatureRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_cb8bec84a49a6ea7, []int{0}
}

func (m *GetCurrentTemperatureRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GetCurrentTemperatureRequest.Unmarshal(m, b)
}
func (m *GetCurrentTemperatureRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GetCurrentTemperatureRequest.Marshal(b, m, deterministic)
}
func (m *GetCurrentTemperatureRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GetCurrentTemperatureRequest.Merge(m, src)
}
func (m *GetCurrentTemperatureRequest) XXX_Size() int {
	return xxx_messageInfo_GetCurrentTemperatureRequest.Size(m)
}
func (m *GetCurrentTemperatureRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_GetCurrentTemperatureRequest.DiscardUnknown(m)
}

var xxx_messageInfo_GetCurrentTemperatureRequest proto.InternalMessageInfo

type GetCurrentTemperatureResponse struct {
	Temperature          float32              `protobuf:"fixed32,1,opt,name=temperature,proto3" json:"temperature,omitempty"`
	ObservedAt           *timestamp.Timestamp `protobuf:"bytes,2,opt,name=observed_at,json=observedAt,proto3" json:"observed_at,omitempty"`
	XXX_NoUnkeyedLiteral struct{}             `json:"-"`
	XXX_unrecognized     []byte               `json:"-"`
	XXX_sizecache        int32                `json:"-"`
}

func (m *GetCurrentTemperatureResponse) Reset()         { *m = GetCurrentTemperatureResponse{} }
func (m *GetCurrentTemperatureResponse) String() string { return proto.CompactTextString(m) }
func (*GetCurrentTemperatureResponse) ProtoMessage()    {}
func (*GetCurrentTemperatureResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_cb8bec84a49a6ea7, []int{1}
}

func (m *GetCurrentTemperatureResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GetCurrentTemperatureResponse.Unmarshal(m, b)
}
func (m *GetCurrentTemperatureResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GetCurrentTemperatureResponse.Marshal(b, m, deterministic)
}
func (m *GetCurrentTemperatureResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GetCurrentTemperatureResponse.Merge(m, src)
}
func (m *GetCurrentTemperatureResponse) XXX_Size() int {
	return xxx_messageInfo_GetCurrentTemperatureResponse.Size(m)
}
func (m *GetCurrentTemperatureResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_GetCurrentTemperatureResponse.DiscardUnknown(m)
}

var xxx_messageInfo_GetCurrentTemperatureResponse proto.InternalMessageInfo

func (m *GetCurrentTemperatureResponse) GetTemperature() float32 {
	if m != nil {
		return m.Temperature
	}
	return 0
}

func (m *GetCurrentTemperatureResponse) GetObservedAt() *timestamp.Timestamp {
	if m != nil {
		return m.ObservedAt
	}
	return nil
}

type GetTargetTemperatureRequest struct {
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *GetTargetTemperatureRequest) Reset()         { *m = GetTargetTemperatureRequest{} }
func (m *GetTargetTemperatureRequest) String() string { return proto.CompactTextString(m) }
func (*GetTargetTemperatureRequest) ProtoMessage()    {}
func (*GetTargetTemperatureRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_cb8bec84a49a6ea7, []int{2}
}

func (m *GetTargetTemperatureRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GetTargetTemperatureRequest.Unmarshal(m, b)
}
func (m *GetTargetTemperatureRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GetTargetTemperatureRequest.Marshal(b, m, deterministic)
}
func (m *GetTargetTemperatureRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GetTargetTemperatureRequest.Merge(m, src)
}
func (m *GetTargetTemperatureRequest) XXX_Size() int {
	return xxx_messageInfo_GetTargetTemperatureRequest.Size(m)
}
func (m *GetTargetTemperatureRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_GetTargetTemperatureRequest.DiscardUnknown(m)
}

var xxx_messageInfo_GetTargetTemperatureRequest proto.InternalMessageInfo

type GetTargetTemperatureResponse struct {
	Temperature          float32              `protobuf:"fixed32,1,opt,name=temperature,proto3" json:"temperature,omitempty"`
	SetAt                *timestamp.Timestamp `protobuf:"bytes,2,opt,name=set_at,json=setAt,proto3" json:"set_at,omitempty"`
	XXX_NoUnkeyedLiteral struct{}             `json:"-"`
	XXX_unrecognized     []byte               `json:"-"`
	XXX_sizecache        int32                `json:"-"`
}

func (m *GetTargetTemperatureResponse) Reset()         { *m = GetTargetTemperatureResponse{} }
func (m *GetTargetTemperatureResponse) String() string { return proto.CompactTextString(m) }
func (*GetTargetTemperatureResponse) ProtoMessage()    {}
func (*GetTargetTemperatureResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_cb8bec84a49a6ea7, []int{3}
}

func (m *GetTargetTemperatureResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GetTargetTemperatureResponse.Unmarshal(m, b)
}
func (m *GetTargetTemperatureResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GetTargetTemperatureResponse.Marshal(b, m, deterministic)
}
func (m *GetTargetTemperatureResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GetTargetTemperatureResponse.Merge(m, src)
}
func (m *GetTargetTemperatureResponse) XXX_Size() int {
	return xxx_messageInfo_GetTargetTemperatureResponse.Size(m)
}
func (m *GetTargetTemperatureResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_GetTargetTemperatureResponse.DiscardUnknown(m)
}

var xxx_messageInfo_GetTargetTemperatureResponse proto.InternalMessageInfo

func (m *GetTargetTemperatureResponse) GetTemperature() float32 {
	if m != nil {
		return m.Temperature
	}
	return 0
}

func (m *GetTargetTemperatureResponse) GetSetAt() *timestamp.Timestamp {
	if m != nil {
		return m.SetAt
	}
	return nil
}

type SetTargetTemperatureRequest struct {
	Temperature          float32  `protobuf:"fixed32,1,opt,name=temperature,proto3" json:"temperature,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *SetTargetTemperatureRequest) Reset()         { *m = SetTargetTemperatureRequest{} }
func (m *SetTargetTemperatureRequest) String() string { return proto.CompactTextString(m) }
func (*SetTargetTemperatureRequest) ProtoMessage()    {}
func (*SetTargetTemperatureRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_cb8bec84a49a6ea7, []int{4}
}

func (m *SetTargetTemperatureRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_SetTargetTemperatureRequest.Unmarshal(m, b)
}
func (m *SetTargetTemperatureRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_SetTargetTemperatureRequest.Marshal(b, m, deterministic)
}
func (m *SetTargetTemperatureRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_SetTargetTemperatureRequest.Merge(m, src)
}
func (m *SetTargetTemperatureRequest) XXX_Size() int {
	return xxx_messageInfo_SetTargetTemperatureRequest.Size(m)
}
func (m *SetTargetTemperatureRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_SetTargetTemperatureRequest.DiscardUnknown(m)
}

var xxx_messageInfo_SetTargetTemperatureRequest proto.InternalMessageInfo

func (m *SetTargetTemperatureRequest) GetTemperature() float32 {
	if m != nil {
		return m.Temperature
	}
	return 0
}

type SetTargetTemperatureResponse struct {
	Temperature          float32              `protobuf:"fixed32,1,opt,name=temperature,proto3" json:"temperature,omitempty"`
	SetAt                *timestamp.Timestamp `protobuf:"bytes,2,opt,name=set_at,json=setAt,proto3" json:"set_at,omitempty"`
	XXX_NoUnkeyedLiteral struct{}             `json:"-"`
	XXX_unrecognized     []byte               `json:"-"`
	XXX_sizecache        int32                `json:"-"`
}

func (m *SetTargetTemperatureResponse) Reset()         { *m = SetTargetTemperatureResponse{} }
func (m *SetTargetTemperatureResponse) String() string { return proto.CompactTextString(m) }
func (*SetTargetTemperatureResponse) ProtoMessage()    {}
func (*SetTargetTemperatureResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_cb8bec84a49a6ea7, []int{5}
}

func (m *SetTargetTemperatureResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_SetTargetTemperatureResponse.Unmarshal(m, b)
}
func (m *SetTargetTemperatureResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_SetTargetTemperatureResponse.Marshal(b, m, deterministic)
}
func (m *SetTargetTemperatureResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_SetTargetTemperatureResponse.Merge(m, src)
}
func (m *SetTargetTemperatureResponse) XXX_Size() int {
	return xxx_messageInfo_SetTargetTemperatureResponse.Size(m)
}
func (m *SetTargetTemperatureResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_SetTargetTemperatureResponse.DiscardUnknown(m)
}

var xxx_messageInfo_SetTargetTemperatureResponse proto.InternalMessageInfo

func (m *SetTargetTemperatureResponse) GetTemperature() float32 {
	if m != nil {
		return m.Temperature
	}
	return 0
}

func (m *SetTargetTemperatureResponse) GetSetAt() *timestamp.Timestamp {
	if m != nil {
		return m.SetAt
	}
	return nil
}

func init() {
	proto.RegisterType((*GetCurrentTemperatureRequest)(nil), "appliancepb.GetCurrentTemperatureRequest")
	proto.RegisterType((*GetCurrentTemperatureResponse)(nil), "appliancepb.GetCurrentTemperatureResponse")
	proto.RegisterType((*GetTargetTemperatureRequest)(nil), "appliancepb.GetTargetTemperatureRequest")
	proto.RegisterType((*GetTargetTemperatureResponse)(nil), "appliancepb.GetTargetTemperatureResponse")
	proto.RegisterType((*SetTargetTemperatureRequest)(nil), "appliancepb.SetTargetTemperatureRequest")
	proto.RegisterType((*SetTargetTemperatureResponse)(nil), "appliancepb.SetTargetTemperatureResponse")
}

func init() {
	proto.RegisterFile("appliance.proto", fileDescriptor_cb8bec84a49a6ea7)
}

var fileDescriptor_cb8bec84a49a6ea7 = []byte{
	// 286 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xbc, 0x92, 0x41, 0x4b, 0xfb, 0x40,
	0x10, 0xc5, 0xff, 0x09, 0xfc, 0x0b, 0x4e, 0x0e, 0xc2, 0xa2, 0x50, 0x52, 0xab, 0x21, 0xa7, 0xd4,
	0xc3, 0x16, 0xeb, 0xd1, 0x83, 0x04, 0x0f, 0xbd, 0x67, 0x73, 0x97, 0x8d, 0x8e, 0xa1, 0xd0, 0x64,
	0xd7, 0xdd, 0x89, 0x47, 0xbf, 0xa8, 0x5f, 0x46, 0x4c, 0x88, 0x06, 0x49, 0xda, 0x3d, 0x79, 0x9d,
	0xf7, 0xd8, 0xf7, 0xdb, 0x99, 0x07, 0xa7, 0x52, 0xeb, 0xfd, 0x4e, 0xd6, 0x4f, 0xc8, 0xb5, 0x51,
	0xa4, 0x58, 0xf0, 0x3d, 0xd0, 0x45, 0x78, 0x55, 0x2a, 0x55, 0xee, 0x71, 0xdd, 0x4a, 0x45, 0xf3,
	0xb2, 0xa6, 0x5d, 0x85, 0x96, 0x64, 0xa5, 0x3b, 0x77, 0x7c, 0x09, 0x17, 0x5b, 0xa4, 0x87, 0xc6,
	0x18, 0xac, 0x29, 0xc7, 0x4a, 0xa3, 0x91, 0xd4, 0x18, 0xcc, 0xf0, 0xb5, 0x41, 0x4b, 0xf1, 0x3b,
	0x2c, 0x27, 0x74, 0xab, 0x55, 0x6d, 0x91, 0x45, 0x10, 0xd0, 0xcf, 0x78, 0xee, 0x45, 0x5e, 0xe2,
	0x67, 0xc3, 0x11, 0xbb, 0x83, 0x40, 0x15, 0x16, 0xcd, 0x1b, 0x3e, 0x3f, 0x4a, 0x9a, 0xfb, 0x91,
	0x97, 0x04, 0x9b, 0x90, 0x77, 0x64, 0xbc, 0x27, 0xe3, 0x79, 0x4f, 0x96, 0x41, 0x6f, 0x4f, 0x29,
	0x5e, 0xc2, 0x62, 0x8b, 0x94, 0x4b, 0x53, 0xe2, 0x18, 0x9e, 0x6d, 0xf1, 0x47, 0x64, 0x67, 0xba,
	0x1b, 0x98, 0x59, 0x24, 0x37, 0xb0, 0xff, 0x16, 0x29, 0xa5, 0xf8, 0x1e, 0x16, 0x62, 0x9a, 0xe9,
	0x78, 0xe6, 0x17, 0xb5, 0xf8, 0x6b, 0xea, 0xcd, 0x87, 0x0f, 0x27, 0x69, 0x5f, 0x0d, 0xa6, 0xe1,
	0x7c, 0xf4, 0xae, 0x6c, 0xc5, 0x07, 0xfd, 0xe1, 0x87, 0xba, 0x11, 0x5e, 0xbb, 0x58, 0xbb, 0x2f,
	0xc5, 0xff, 0x58, 0x05, 0x67, 0x63, 0xa7, 0x62, 0xc9, 0xef, 0x57, 0xa6, 0x16, 0x1b, 0xae, 0x1c,
	0x9c, 0xc3, 0x38, 0x71, 0x3c, 0x4e, 0x38, 0xc7, 0x89, 0x83, 0x71, 0xc5, 0xac, 0x5d, 0xfc, 0xed,
	0x67, 0x00, 0x00, 0x00, 0xff, 0xff, 0xfd, 0xcb, 0x1d, 0xbe, 0x8f, 0x03, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConnInterface

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion6

// ApplianceClient is the client API for Appliance service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type ApplianceClient interface {
	GetCurrentTemperature(ctx context.Context, in *GetCurrentTemperatureRequest, opts ...grpc.CallOption) (*GetCurrentTemperatureResponse, error)
	GetTargetTemperature(ctx context.Context, in *GetTargetTemperatureRequest, opts ...grpc.CallOption) (*GetTargetTemperatureResponse, error)
	SetTargetTemperature(ctx context.Context, in *SetTargetTemperatureRequest, opts ...grpc.CallOption) (*SetTargetTemperatureResponse, error)
}

type applianceClient struct {
	cc grpc.ClientConnInterface
}

func NewApplianceClient(cc grpc.ClientConnInterface) ApplianceClient {
	return &applianceClient{cc}
}

func (c *applianceClient) GetCurrentTemperature(ctx context.Context, in *GetCurrentTemperatureRequest, opts ...grpc.CallOption) (*GetCurrentTemperatureResponse, error) {
	out := new(GetCurrentTemperatureResponse)
	err := c.cc.Invoke(ctx, "/appliancepb.Appliance/GetCurrentTemperature", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *applianceClient) GetTargetTemperature(ctx context.Context, in *GetTargetTemperatureRequest, opts ...grpc.CallOption) (*GetTargetTemperatureResponse, error) {
	out := new(GetTargetTemperatureResponse)
	err := c.cc.Invoke(ctx, "/appliancepb.Appliance/GetTargetTemperature", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *applianceClient) SetTargetTemperature(ctx context.Context, in *SetTargetTemperatureRequest, opts ...grpc.CallOption) (*SetTargetTemperatureResponse, error) {
	out := new(SetTargetTemperatureResponse)
	err := c.cc.Invoke(ctx, "/appliancepb.Appliance/SetTargetTemperature", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// ApplianceServer is the server API for Appliance service.
type ApplianceServer interface {
	GetCurrentTemperature(context.Context, *GetCurrentTemperatureRequest) (*GetCurrentTemperatureResponse, error)
	GetTargetTemperature(context.Context, *GetTargetTemperatureRequest) (*GetTargetTemperatureResponse, error)
	SetTargetTemperature(context.Context, *SetTargetTemperatureRequest) (*SetTargetTemperatureResponse, error)
}

// UnimplementedApplianceServer can be embedded to have forward compatible implementations.
type UnimplementedApplianceServer struct {
}

func (*UnimplementedApplianceServer) GetCurrentTemperature(ctx context.Context, req *GetCurrentTemperatureRequest) (*GetCurrentTemperatureResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetCurrentTemperature not implemented")
}
func (*UnimplementedApplianceServer) GetTargetTemperature(ctx context.Context, req *GetTargetTemperatureRequest) (*GetTargetTemperatureResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetTargetTemperature not implemented")
}
func (*UnimplementedApplianceServer) SetTargetTemperature(ctx context.Context, req *SetTargetTemperatureRequest) (*SetTargetTemperatureResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method SetTargetTemperature not implemented")
}

func RegisterApplianceServer(s *grpc.Server, srv ApplianceServer) {
	s.RegisterService(&_Appliance_serviceDesc, srv)
}

func _Appliance_GetCurrentTemperature_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetCurrentTemperatureRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ApplianceServer).GetCurrentTemperature(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/appliancepb.Appliance/GetCurrentTemperature",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ApplianceServer).GetCurrentTemperature(ctx, req.(*GetCurrentTemperatureRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Appliance_GetTargetTemperature_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetTargetTemperatureRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ApplianceServer).GetTargetTemperature(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/appliancepb.Appliance/GetTargetTemperature",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ApplianceServer).GetTargetTemperature(ctx, req.(*GetTargetTemperatureRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Appliance_SetTargetTemperature_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(SetTargetTemperatureRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ApplianceServer).SetTargetTemperature(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/appliancepb.Appliance/SetTargetTemperature",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ApplianceServer).SetTargetTemperature(ctx, req.(*SetTargetTemperatureRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _Appliance_serviceDesc = grpc.ServiceDesc{
	ServiceName: "appliancepb.Appliance",
	HandlerType: (*ApplianceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetCurrentTemperature",
			Handler:    _Appliance_GetCurrentTemperature_Handler,
		},
		{
			MethodName: "GetTargetTemperature",
			Handler:    _Appliance_GetTargetTemperature_Handler,
		},
		{
			MethodName: "SetTargetTemperature",
			Handler:    _Appliance_SetTargetTemperature_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "appliance.proto",
}
