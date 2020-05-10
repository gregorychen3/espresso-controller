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

type TemperatureSample struct {
	Value                float64              `protobuf:"fixed64,1,opt,name=value,proto3" json:"value,omitempty"`
	ObservedAt           *timestamp.Timestamp `protobuf:"bytes,2,opt,name=observed_at,json=observedAt,proto3" json:"observed_at,omitempty"`
	XXX_NoUnkeyedLiteral struct{}             `json:"-"`
	XXX_unrecognized     []byte               `json:"-"`
	XXX_sizecache        int32                `json:"-"`
}

func (m *TemperatureSample) Reset()         { *m = TemperatureSample{} }
func (m *TemperatureSample) String() string { return proto.CompactTextString(m) }
func (*TemperatureSample) ProtoMessage()    {}
func (*TemperatureSample) Descriptor() ([]byte, []int) {
	return fileDescriptor_cb8bec84a49a6ea7, []int{0}
}

func (m *TemperatureSample) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_TemperatureSample.Unmarshal(m, b)
}
func (m *TemperatureSample) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_TemperatureSample.Marshal(b, m, deterministic)
}
func (m *TemperatureSample) XXX_Merge(src proto.Message) {
	xxx_messageInfo_TemperatureSample.Merge(m, src)
}
func (m *TemperatureSample) XXX_Size() int {
	return xxx_messageInfo_TemperatureSample.Size(m)
}
func (m *TemperatureSample) XXX_DiscardUnknown() {
	xxx_messageInfo_TemperatureSample.DiscardUnknown(m)
}

var xxx_messageInfo_TemperatureSample proto.InternalMessageInfo

func (m *TemperatureSample) GetValue() float64 {
	if m != nil {
		return m.Value
	}
	return 0
}

func (m *TemperatureSample) GetObservedAt() *timestamp.Timestamp {
	if m != nil {
		return m.ObservedAt
	}
	return nil
}

type TemperatureHistory struct {
	Samples              []*TemperatureSample `protobuf:"bytes,1,rep,name=samples,proto3" json:"samples,omitempty"`
	XXX_NoUnkeyedLiteral struct{}             `json:"-"`
	XXX_unrecognized     []byte               `json:"-"`
	XXX_sizecache        int32                `json:"-"`
}

func (m *TemperatureHistory) Reset()         { *m = TemperatureHistory{} }
func (m *TemperatureHistory) String() string { return proto.CompactTextString(m) }
func (*TemperatureHistory) ProtoMessage()    {}
func (*TemperatureHistory) Descriptor() ([]byte, []int) {
	return fileDescriptor_cb8bec84a49a6ea7, []int{1}
}

func (m *TemperatureHistory) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_TemperatureHistory.Unmarshal(m, b)
}
func (m *TemperatureHistory) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_TemperatureHistory.Marshal(b, m, deterministic)
}
func (m *TemperatureHistory) XXX_Merge(src proto.Message) {
	xxx_messageInfo_TemperatureHistory.Merge(m, src)
}
func (m *TemperatureHistory) XXX_Size() int {
	return xxx_messageInfo_TemperatureHistory.Size(m)
}
func (m *TemperatureHistory) XXX_DiscardUnknown() {
	xxx_messageInfo_TemperatureHistory.DiscardUnknown(m)
}

var xxx_messageInfo_TemperatureHistory proto.InternalMessageInfo

func (m *TemperatureHistory) GetSamples() []*TemperatureSample {
	if m != nil {
		return m.Samples
	}
	return nil
}

type TemperatureStreamRequest struct {
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *TemperatureStreamRequest) Reset()         { *m = TemperatureStreamRequest{} }
func (m *TemperatureStreamRequest) String() string { return proto.CompactTextString(m) }
func (*TemperatureStreamRequest) ProtoMessage()    {}
func (*TemperatureStreamRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_cb8bec84a49a6ea7, []int{2}
}

func (m *TemperatureStreamRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_TemperatureStreamRequest.Unmarshal(m, b)
}
func (m *TemperatureStreamRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_TemperatureStreamRequest.Marshal(b, m, deterministic)
}
func (m *TemperatureStreamRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_TemperatureStreamRequest.Merge(m, src)
}
func (m *TemperatureStreamRequest) XXX_Size() int {
	return xxx_messageInfo_TemperatureStreamRequest.Size(m)
}
func (m *TemperatureStreamRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_TemperatureStreamRequest.DiscardUnknown(m)
}

var xxx_messageInfo_TemperatureStreamRequest proto.InternalMessageInfo

type TemperatureStreamResponse struct {
	// Types that are valid to be assigned to Data:
	//	*TemperatureStreamResponse_History
	//	*TemperatureStreamResponse_Sample
	Data                 isTemperatureStreamResponse_Data `protobuf_oneof:"data"`
	XXX_NoUnkeyedLiteral struct{}                         `json:"-"`
	XXX_unrecognized     []byte                           `json:"-"`
	XXX_sizecache        int32                            `json:"-"`
}

func (m *TemperatureStreamResponse) Reset()         { *m = TemperatureStreamResponse{} }
func (m *TemperatureStreamResponse) String() string { return proto.CompactTextString(m) }
func (*TemperatureStreamResponse) ProtoMessage()    {}
func (*TemperatureStreamResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_cb8bec84a49a6ea7, []int{3}
}

func (m *TemperatureStreamResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_TemperatureStreamResponse.Unmarshal(m, b)
}
func (m *TemperatureStreamResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_TemperatureStreamResponse.Marshal(b, m, deterministic)
}
func (m *TemperatureStreamResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_TemperatureStreamResponse.Merge(m, src)
}
func (m *TemperatureStreamResponse) XXX_Size() int {
	return xxx_messageInfo_TemperatureStreamResponse.Size(m)
}
func (m *TemperatureStreamResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_TemperatureStreamResponse.DiscardUnknown(m)
}

var xxx_messageInfo_TemperatureStreamResponse proto.InternalMessageInfo

type isTemperatureStreamResponse_Data interface {
	isTemperatureStreamResponse_Data()
}

type TemperatureStreamResponse_History struct {
	History *TemperatureHistory `protobuf:"bytes,1,opt,name=history,proto3,oneof"`
}

type TemperatureStreamResponse_Sample struct {
	Sample *TemperatureSample `protobuf:"bytes,2,opt,name=sample,proto3,oneof"`
}

func (*TemperatureStreamResponse_History) isTemperatureStreamResponse_Data() {}

func (*TemperatureStreamResponse_Sample) isTemperatureStreamResponse_Data() {}

func (m *TemperatureStreamResponse) GetData() isTemperatureStreamResponse_Data {
	if m != nil {
		return m.Data
	}
	return nil
}

func (m *TemperatureStreamResponse) GetHistory() *TemperatureHistory {
	if x, ok := m.GetData().(*TemperatureStreamResponse_History); ok {
		return x.History
	}
	return nil
}

func (m *TemperatureStreamResponse) GetSample() *TemperatureSample {
	if x, ok := m.GetData().(*TemperatureStreamResponse_Sample); ok {
		return x.Sample
	}
	return nil
}

// XXX_OneofWrappers is for the internal use of the proto package.
func (*TemperatureStreamResponse) XXX_OneofWrappers() []interface{} {
	return []interface{}{
		(*TemperatureStreamResponse_History)(nil),
		(*TemperatureStreamResponse_Sample)(nil),
	}
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
	return fileDescriptor_cb8bec84a49a6ea7, []int{4}
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
	Temperature          float64              `protobuf:"fixed64,1,opt,name=temperature,proto3" json:"temperature,omitempty"`
	SetAt                *timestamp.Timestamp `protobuf:"bytes,2,opt,name=set_at,json=setAt,proto3" json:"set_at,omitempty"`
	XXX_NoUnkeyedLiteral struct{}             `json:"-"`
	XXX_unrecognized     []byte               `json:"-"`
	XXX_sizecache        int32                `json:"-"`
}

func (m *GetTargetTemperatureResponse) Reset()         { *m = GetTargetTemperatureResponse{} }
func (m *GetTargetTemperatureResponse) String() string { return proto.CompactTextString(m) }
func (*GetTargetTemperatureResponse) ProtoMessage()    {}
func (*GetTargetTemperatureResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_cb8bec84a49a6ea7, []int{5}
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

func (m *GetTargetTemperatureResponse) GetTemperature() float64 {
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
	Temperature          float64  `protobuf:"fixed64,1,opt,name=temperature,proto3" json:"temperature,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *SetTargetTemperatureRequest) Reset()         { *m = SetTargetTemperatureRequest{} }
func (m *SetTargetTemperatureRequest) String() string { return proto.CompactTextString(m) }
func (*SetTargetTemperatureRequest) ProtoMessage()    {}
func (*SetTargetTemperatureRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_cb8bec84a49a6ea7, []int{6}
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

func (m *SetTargetTemperatureRequest) GetTemperature() float64 {
	if m != nil {
		return m.Temperature
	}
	return 0
}

type SetTargetTemperatureResponse struct {
	Temperature          float64              `protobuf:"fixed64,1,opt,name=temperature,proto3" json:"temperature,omitempty"`
	SetAt                *timestamp.Timestamp `protobuf:"bytes,2,opt,name=set_at,json=setAt,proto3" json:"set_at,omitempty"`
	XXX_NoUnkeyedLiteral struct{}             `json:"-"`
	XXX_unrecognized     []byte               `json:"-"`
	XXX_sizecache        int32                `json:"-"`
}

func (m *SetTargetTemperatureResponse) Reset()         { *m = SetTargetTemperatureResponse{} }
func (m *SetTargetTemperatureResponse) String() string { return proto.CompactTextString(m) }
func (*SetTargetTemperatureResponse) ProtoMessage()    {}
func (*SetTargetTemperatureResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_cb8bec84a49a6ea7, []int{7}
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

func (m *SetTargetTemperatureResponse) GetTemperature() float64 {
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
	proto.RegisterType((*TemperatureSample)(nil), "appliancepb.TemperatureSample")
	proto.RegisterType((*TemperatureHistory)(nil), "appliancepb.TemperatureHistory")
	proto.RegisterType((*TemperatureStreamRequest)(nil), "appliancepb.TemperatureStreamRequest")
	proto.RegisterType((*TemperatureStreamResponse)(nil), "appliancepb.TemperatureStreamResponse")
	proto.RegisterType((*GetTargetTemperatureRequest)(nil), "appliancepb.GetTargetTemperatureRequest")
	proto.RegisterType((*GetTargetTemperatureResponse)(nil), "appliancepb.GetTargetTemperatureResponse")
	proto.RegisterType((*SetTargetTemperatureRequest)(nil), "appliancepb.SetTargetTemperatureRequest")
	proto.RegisterType((*SetTargetTemperatureResponse)(nil), "appliancepb.SetTargetTemperatureResponse")
}

func init() {
	proto.RegisterFile("appliance.proto", fileDescriptor_cb8bec84a49a6ea7)
}

var fileDescriptor_cb8bec84a49a6ea7 = []byte{
	// 386 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xbc, 0x92, 0xcf, 0x8f, 0x9a, 0x40,
	0x14, 0xc7, 0xc5, 0x56, 0x4c, 0x1f, 0x87, 0xc6, 0x89, 0x07, 0x8a, 0x6d, 0x25, 0x24, 0x6d, 0xe8,
	0x05, 0x5b, 0x7a, 0x31, 0xe9, 0xa1, 0xd1, 0x4b, 0x3d, 0xf5, 0x00, 0xde, 0x9b, 0xa1, 0x3e, 0x2d,
	0x09, 0x38, 0xd3, 0x99, 0x87, 0xc9, 0xfe, 0x2b, 0xfb, 0x4f, 0xed, 0xbf, 0xb4, 0x91, 0x1f, 0xbb,
	0x6c, 0x56, 0xc5, 0xd3, 0x1e, 0x99, 0xf7, 0x85, 0xcf, 0xe7, 0xcd, 0x17, 0x78, 0xcb, 0xa5, 0xcc,
	0x52, 0xbe, 0xff, 0x8b, 0x81, 0x54, 0x82, 0x04, 0xb3, 0x1e, 0x0e, 0x64, 0xe2, 0x4c, 0x77, 0x42,
	0xec, 0x32, 0x9c, 0x95, 0xa3, 0xa4, 0xd8, 0xce, 0x28, 0xcd, 0x51, 0x13, 0xcf, 0x65, 0x95, 0xf6,
	0xb6, 0x30, 0x5a, 0x63, 0x2e, 0x51, 0x71, 0x2a, 0x14, 0xc6, 0x3c, 0x97, 0x19, 0xb2, 0x31, 0x0c,
	0x0e, 0x3c, 0x2b, 0xd0, 0x36, 0x5c, 0xc3, 0x37, 0xa2, 0xea, 0x81, 0xfd, 0x00, 0x4b, 0x24, 0x1a,
	0xd5, 0x01, 0x37, 0x7f, 0x38, 0xd9, 0x7d, 0xd7, 0xf0, 0xad, 0xd0, 0x09, 0x2a, 0x42, 0xd0, 0x10,
	0x82, 0x75, 0x43, 0x88, 0xa0, 0x89, 0x2f, 0xc8, 0xfb, 0x0d, 0xac, 0xc5, 0x59, 0xa5, 0x9a, 0x84,
	0xba, 0x61, 0x73, 0x18, 0xea, 0x12, 0xa9, 0x6d, 0xc3, 0x7d, 0xe5, 0x5b, 0xe1, 0xc7, 0xa0, 0x65,
	0x1f, 0x3c, 0x33, 0x8b, 0x9a, 0xb8, 0xe7, 0x80, 0xdd, 0x9e, 0x92, 0x42, 0x9e, 0x47, 0xf8, 0xbf,
	0x40, 0x4d, 0xde, 0xad, 0x01, 0xef, 0x4e, 0x0c, 0xb5, 0x14, 0x7b, 0x7d, 0x5c, 0x63, 0xf8, 0xaf,
	0xc2, 0x97, 0xeb, 0x59, 0xe1, 0xf4, 0x1c, 0xb3, 0xb6, 0x5c, 0xf5, 0xa2, 0xe6, 0x0d, 0x36, 0x07,
	0xb3, 0x32, 0xa8, 0xd7, 0xef, 0xf0, 0x5d, 0xf5, 0xa2, 0x3a, 0xbf, 0x34, 0xe1, 0xf5, 0x86, 0x13,
	0xf7, 0x3e, 0xc0, 0xe4, 0x17, 0xd2, 0x9a, 0xab, 0x1d, 0x52, 0x2b, 0xdf, 0xb8, 0x6b, 0x78, 0x7f,
	0x7a, 0x5c, 0xdb, 0xbb, 0x60, 0xd1, 0xe3, 0x71, 0x5d, 0x50, 0xfb, 0x88, 0x7d, 0x03, 0x53, 0x23,
	0x5d, 0xd7, 0xd0, 0x40, 0x23, 0x2d, 0xc8, 0xfb, 0x09, 0x93, 0xf8, 0xbc, 0x53, 0x37, 0xf3, 0x68,
	0x1d, 0xbf, 0xb4, 0x75, 0x78, 0xd7, 0x87, 0x37, 0x8b, 0xe6, 0xf6, 0xd9, 0x06, 0x46, 0x4b, 0x91,
	0x66, 0xa8, 0x5a, 0x7c, 0xf6, 0xe9, 0x6c, 0x3d, 0xed, 0x1f, 0xc6, 0xf9, 0xdc, 0x15, 0xab, 0xd6,
	0xf8, 0x6a, 0xb0, 0x1c, 0xc6, 0xa7, 0xea, 0x61, 0xfe, 0x93, 0x2f, 0x5c, 0x28, 0xd8, 0xf9, 0x72,
	0x45, 0xb2, 0xc2, 0x79, 0xbd, 0x23, 0x2e, 0xee, 0xc6, 0xc5, 0x57, 0xe3, 0xe2, 0x8b, 0xb8, 0xc4,
	0x2c, 0x2f, 0xfb, 0xfb, 0x7d, 0x00, 0x00, 0x00, 0xff, 0xff, 0xe0, 0x17, 0x19, 0x89, 0x54, 0x04,
	0x00, 0x00,
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
	BoilerTemperature(ctx context.Context, in *TemperatureStreamRequest, opts ...grpc.CallOption) (Appliance_BoilerTemperatureClient, error)
	GetTargetTemperature(ctx context.Context, in *GetTargetTemperatureRequest, opts ...grpc.CallOption) (*GetTargetTemperatureResponse, error)
	SetTargetTemperature(ctx context.Context, in *SetTargetTemperatureRequest, opts ...grpc.CallOption) (*SetTargetTemperatureResponse, error)
}

type applianceClient struct {
	cc grpc.ClientConnInterface
}

func NewApplianceClient(cc grpc.ClientConnInterface) ApplianceClient {
	return &applianceClient{cc}
}

func (c *applianceClient) BoilerTemperature(ctx context.Context, in *TemperatureStreamRequest, opts ...grpc.CallOption) (Appliance_BoilerTemperatureClient, error) {
	stream, err := c.cc.NewStream(ctx, &_Appliance_serviceDesc.Streams[0], "/appliancepb.Appliance/BoilerTemperature", opts...)
	if err != nil {
		return nil, err
	}
	x := &applianceBoilerTemperatureClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type Appliance_BoilerTemperatureClient interface {
	Recv() (*TemperatureStreamResponse, error)
	grpc.ClientStream
}

type applianceBoilerTemperatureClient struct {
	grpc.ClientStream
}

func (x *applianceBoilerTemperatureClient) Recv() (*TemperatureStreamResponse, error) {
	m := new(TemperatureStreamResponse)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
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
	BoilerTemperature(*TemperatureStreamRequest, Appliance_BoilerTemperatureServer) error
	GetTargetTemperature(context.Context, *GetTargetTemperatureRequest) (*GetTargetTemperatureResponse, error)
	SetTargetTemperature(context.Context, *SetTargetTemperatureRequest) (*SetTargetTemperatureResponse, error)
}

// UnimplementedApplianceServer can be embedded to have forward compatible implementations.
type UnimplementedApplianceServer struct {
}

func (*UnimplementedApplianceServer) BoilerTemperature(req *TemperatureStreamRequest, srv Appliance_BoilerTemperatureServer) error {
	return status.Errorf(codes.Unimplemented, "method BoilerTemperature not implemented")
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

func _Appliance_BoilerTemperature_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(TemperatureStreamRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(ApplianceServer).BoilerTemperature(m, &applianceBoilerTemperatureServer{stream})
}

type Appliance_BoilerTemperatureServer interface {
	Send(*TemperatureStreamResponse) error
	grpc.ServerStream
}

type applianceBoilerTemperatureServer struct {
	grpc.ServerStream
}

func (x *applianceBoilerTemperatureServer) Send(m *TemperatureStreamResponse) error {
	return x.ServerStream.SendMsg(m)
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
			MethodName: "GetTargetTemperature",
			Handler:    _Appliance_GetTargetTemperature_Handler,
		},
		{
			MethodName: "SetTargetTemperature",
			Handler:    _Appliance_SetTargetTemperature_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "BoilerTemperature",
			Handler:       _Appliance_BoilerTemperature_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "appliance.proto",
}
