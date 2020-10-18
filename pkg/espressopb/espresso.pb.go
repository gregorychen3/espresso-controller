// Code generated by protoc-gen-go. DO NOT EDIT.
// source: espresso.proto

package espressopb

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
	return fileDescriptor_445399412d1702d2, []int{0}
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
	return fileDescriptor_445399412d1702d2, []int{1}
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
	return fileDescriptor_445399412d1702d2, []int{2}
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
	return fileDescriptor_445399412d1702d2, []int{3}
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

type GetConfigurationRequest struct {
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *GetConfigurationRequest) Reset()         { *m = GetConfigurationRequest{} }
func (m *GetConfigurationRequest) String() string { return proto.CompactTextString(m) }
func (*GetConfigurationRequest) ProtoMessage()    {}
func (*GetConfigurationRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_445399412d1702d2, []int{4}
}

func (m *GetConfigurationRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GetConfigurationRequest.Unmarshal(m, b)
}
func (m *GetConfigurationRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GetConfigurationRequest.Marshal(b, m, deterministic)
}
func (m *GetConfigurationRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GetConfigurationRequest.Merge(m, src)
}
func (m *GetConfigurationRequest) XXX_Size() int {
	return xxx_messageInfo_GetConfigurationRequest.Size(m)
}
func (m *GetConfigurationRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_GetConfigurationRequest.DiscardUnknown(m)
}

var xxx_messageInfo_GetConfigurationRequest proto.InternalMessageInfo

type GetConfigurationResponse struct {
	Temperature          float64              `protobuf:"fixed64,1,opt,name=temperature,proto3" json:"temperature,omitempty"`
	SetAt                *timestamp.Timestamp `protobuf:"bytes,2,opt,name=set_at,json=setAt,proto3" json:"set_at,omitempty"`
	P                    float32              `protobuf:"fixed32,3,opt,name=p,proto3" json:"p,omitempty"`
	D                    float32              `protobuf:"fixed32,4,opt,name=d,proto3" json:"d,omitempty"`
	XXX_NoUnkeyedLiteral struct{}             `json:"-"`
	XXX_unrecognized     []byte               `json:"-"`
	XXX_sizecache        int32                `json:"-"`
}

func (m *GetConfigurationResponse) Reset()         { *m = GetConfigurationResponse{} }
func (m *GetConfigurationResponse) String() string { return proto.CompactTextString(m) }
func (*GetConfigurationResponse) ProtoMessage()    {}
func (*GetConfigurationResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_445399412d1702d2, []int{5}
}

func (m *GetConfigurationResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GetConfigurationResponse.Unmarshal(m, b)
}
func (m *GetConfigurationResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GetConfigurationResponse.Marshal(b, m, deterministic)
}
func (m *GetConfigurationResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GetConfigurationResponse.Merge(m, src)
}
func (m *GetConfigurationResponse) XXX_Size() int {
	return xxx_messageInfo_GetConfigurationResponse.Size(m)
}
func (m *GetConfigurationResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_GetConfigurationResponse.DiscardUnknown(m)
}

var xxx_messageInfo_GetConfigurationResponse proto.InternalMessageInfo

func (m *GetConfigurationResponse) GetTemperature() float64 {
	if m != nil {
		return m.Temperature
	}
	return 0
}

func (m *GetConfigurationResponse) GetSetAt() *timestamp.Timestamp {
	if m != nil {
		return m.SetAt
	}
	return nil
}

func (m *GetConfigurationResponse) GetP() float32 {
	if m != nil {
		return m.P
	}
	return 0
}

func (m *GetConfigurationResponse) GetD() float32 {
	if m != nil {
		return m.D
	}
	return 0
}

type SetConfigurationRequest struct {
	Temperature          float64              `protobuf:"fixed64,1,opt,name=temperature,proto3" json:"temperature,omitempty"`
	SetAt                *timestamp.Timestamp `protobuf:"bytes,2,opt,name=set_at,json=setAt,proto3" json:"set_at,omitempty"`
	P                    float32              `protobuf:"fixed32,3,opt,name=p,proto3" json:"p,omitempty"`
	D                    float32              `protobuf:"fixed32,4,opt,name=d,proto3" json:"d,omitempty"`
	XXX_NoUnkeyedLiteral struct{}             `json:"-"`
	XXX_unrecognized     []byte               `json:"-"`
	XXX_sizecache        int32                `json:"-"`
}

func (m *SetConfigurationRequest) Reset()         { *m = SetConfigurationRequest{} }
func (m *SetConfigurationRequest) String() string { return proto.CompactTextString(m) }
func (*SetConfigurationRequest) ProtoMessage()    {}
func (*SetConfigurationRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_445399412d1702d2, []int{6}
}

func (m *SetConfigurationRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_SetConfigurationRequest.Unmarshal(m, b)
}
func (m *SetConfigurationRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_SetConfigurationRequest.Marshal(b, m, deterministic)
}
func (m *SetConfigurationRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_SetConfigurationRequest.Merge(m, src)
}
func (m *SetConfigurationRequest) XXX_Size() int {
	return xxx_messageInfo_SetConfigurationRequest.Size(m)
}
func (m *SetConfigurationRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_SetConfigurationRequest.DiscardUnknown(m)
}

var xxx_messageInfo_SetConfigurationRequest proto.InternalMessageInfo

func (m *SetConfigurationRequest) GetTemperature() float64 {
	if m != nil {
		return m.Temperature
	}
	return 0
}

func (m *SetConfigurationRequest) GetSetAt() *timestamp.Timestamp {
	if m != nil {
		return m.SetAt
	}
	return nil
}

func (m *SetConfigurationRequest) GetP() float32 {
	if m != nil {
		return m.P
	}
	return 0
}

func (m *SetConfigurationRequest) GetD() float32 {
	if m != nil {
		return m.D
	}
	return 0
}

type SetConfigurationResponse struct {
	Temperature          float64              `protobuf:"fixed64,1,opt,name=temperature,proto3" json:"temperature,omitempty"`
	SetAt                *timestamp.Timestamp `protobuf:"bytes,2,opt,name=set_at,json=setAt,proto3" json:"set_at,omitempty"`
	P                    float32              `protobuf:"fixed32,3,opt,name=p,proto3" json:"p,omitempty"`
	D                    float32              `protobuf:"fixed32,4,opt,name=d,proto3" json:"d,omitempty"`
	XXX_NoUnkeyedLiteral struct{}             `json:"-"`
	XXX_unrecognized     []byte               `json:"-"`
	XXX_sizecache        int32                `json:"-"`
}

func (m *SetConfigurationResponse) Reset()         { *m = SetConfigurationResponse{} }
func (m *SetConfigurationResponse) String() string { return proto.CompactTextString(m) }
func (*SetConfigurationResponse) ProtoMessage()    {}
func (*SetConfigurationResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_445399412d1702d2, []int{7}
}

func (m *SetConfigurationResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_SetConfigurationResponse.Unmarshal(m, b)
}
func (m *SetConfigurationResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_SetConfigurationResponse.Marshal(b, m, deterministic)
}
func (m *SetConfigurationResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_SetConfigurationResponse.Merge(m, src)
}
func (m *SetConfigurationResponse) XXX_Size() int {
	return xxx_messageInfo_SetConfigurationResponse.Size(m)
}
func (m *SetConfigurationResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_SetConfigurationResponse.DiscardUnknown(m)
}

var xxx_messageInfo_SetConfigurationResponse proto.InternalMessageInfo

func (m *SetConfigurationResponse) GetTemperature() float64 {
	if m != nil {
		return m.Temperature
	}
	return 0
}

func (m *SetConfigurationResponse) GetSetAt() *timestamp.Timestamp {
	if m != nil {
		return m.SetAt
	}
	return nil
}

func (m *SetConfigurationResponse) GetP() float32 {
	if m != nil {
		return m.P
	}
	return 0
}

func (m *SetConfigurationResponse) GetD() float32 {
	if m != nil {
		return m.D
	}
	return 0
}

func init() {
	proto.RegisterType((*TemperatureSample)(nil), "espressopb.TemperatureSample")
	proto.RegisterType((*TemperatureHistory)(nil), "espressopb.TemperatureHistory")
	proto.RegisterType((*TemperatureStreamRequest)(nil), "espressopb.TemperatureStreamRequest")
	proto.RegisterType((*TemperatureStreamResponse)(nil), "espressopb.TemperatureStreamResponse")
	proto.RegisterType((*GetConfigurationRequest)(nil), "espressopb.GetConfigurationRequest")
	proto.RegisterType((*GetConfigurationResponse)(nil), "espressopb.GetConfigurationResponse")
	proto.RegisterType((*SetConfigurationRequest)(nil), "espressopb.SetConfigurationRequest")
	proto.RegisterType((*SetConfigurationResponse)(nil), "espressopb.SetConfigurationResponse")
}

func init() {
	proto.RegisterFile("espresso.proto", fileDescriptor_445399412d1702d2)
}

var fileDescriptor_445399412d1702d2 = []byte{
	// 423 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xcc, 0x52, 0x4d, 0x6f, 0xd3, 0x40,
	0x10, 0xed, 0x36, 0xad, 0x8b, 0xc6, 0x08, 0xb5, 0xab, 0x4a, 0x75, 0x2d, 0x01, 0x96, 0x29, 0x92,
	0x4f, 0x2e, 0x98, 0x43, 0x25, 0x38, 0xb5, 0x08, 0xd5, 0x17, 0x2e, 0x76, 0xaf, 0x11, 0x5a, 0xcb,
	0x93, 0x60, 0xc9, 0xce, 0x2e, 0xbb, 0xe3, 0x48, 0xfc, 0x05, 0x38, 0x72, 0xe1, 0xe7, 0xa2, 0xf8,
	0x43, 0xb1, 0x48, 0x1c, 0x72, 0x01, 0x71, 0x9c, 0x9d, 0xb7, 0xf3, 0xde, 0xcc, 0x7b, 0xf0, 0x04,
	0x8d, 0xd2, 0x68, 0x8c, 0x0c, 0x95, 0x96, 0x24, 0x39, 0xf4, 0xb5, 0xca, 0xdc, 0xe7, 0x73, 0x29,
	0xe7, 0x25, 0x5e, 0x37, 0x9d, 0xac, 0x9e, 0x5d, 0x53, 0x51, 0xa1, 0x21, 0x51, 0xa9, 0x16, 0xec,
	0xcf, 0xe0, 0xec, 0x01, 0x2b, 0x85, 0x5a, 0x50, 0xad, 0x31, 0x15, 0x95, 0x2a, 0x91, 0x9f, 0xc3,
	0xf1, 0x52, 0x94, 0x35, 0x3a, 0xcc, 0x63, 0x01, 0x4b, 0xda, 0x82, 0xbf, 0x03, 0x5b, 0x66, 0x06,
	0xf5, 0x12, 0xf3, 0x4f, 0x82, 0x9c, 0x43, 0x8f, 0x05, 0x76, 0xe4, 0x86, 0x2d, 0x43, 0xd8, 0x33,
	0x84, 0x0f, 0x3d, 0x43, 0x02, 0x3d, 0xfc, 0x96, 0xfc, 0x8f, 0xc0, 0x07, 0x3c, 0x71, 0x61, 0x48,
	0xea, 0xaf, 0xfc, 0x06, 0x4e, 0x4c, 0x43, 0x69, 0x1c, 0xe6, 0x4d, 0x02, 0x3b, 0x7a, 0x1a, 0xae,
	0xc5, 0x87, 0x1b, 0xc2, 0x92, 0x1e, 0xed, 0xbb, 0xe0, 0x0c, 0xbb, 0xa4, 0x51, 0x54, 0x09, 0x7e,
	0xa9, 0xd1, 0x90, 0xff, 0x93, 0xc1, 0xe5, 0x96, 0xa6, 0x51, 0x72, 0x61, 0x90, 0xbf, 0x85, 0x93,
	0xcf, 0x2d, 0x7b, 0xb3, 0x9d, 0x1d, 0x3d, 0x1b, 0xa1, 0xec, 0x34, 0xc6, 0x07, 0x49, 0xff, 0x81,
	0xdf, 0x80, 0xd5, 0x0a, 0xe8, 0x96, 0xdf, 0xad, 0x36, 0x3e, 0x48, 0x3a, 0xf8, 0x9d, 0x05, 0x47,
	0xb9, 0x20, 0xe1, 0x5f, 0xc2, 0xc5, 0x3d, 0xd2, 0x7b, 0xb9, 0x98, 0x15, 0xf3, 0x5a, 0x0b, 0x2a,
	0xe4, 0xa2, 0x57, 0xfd, 0x9d, 0x81, 0xb3, 0xd9, 0xeb, 0x44, 0x7b, 0x60, 0xd3, 0x7a, 0x7c, 0x67,
	0xcb, 0xf0, 0x89, 0xbf, 0x06, 0xcb, 0x20, 0xed, 0xe7, 0xcb, 0xb1, 0x41, 0xba, 0x25, 0xfe, 0x18,
	0x98, 0x72, 0x26, 0x1e, 0x0b, 0x0e, 0x13, 0xa6, 0x56, 0x55, 0xee, 0x1c, 0xb5, 0x55, 0xee, 0x7f,
	0x63, 0x70, 0x91, 0x6e, 0x57, 0xfa, 0xef, 0xc5, 0xac, 0x4e, 0x93, 0xfe, 0x2f, 0xa7, 0x89, 0x7e,
	0x4c, 0xe0, 0xd1, 0x87, 0xce, 0x76, 0x8e, 0x70, 0x7e, 0xaf, 0x65, 0xad, 0x62, 0x14, 0xf9, 0x20,
	0x00, 0xfc, 0x6a, 0x2c, 0x19, 0xc3, 0xa4, 0xba, 0x2f, 0xff, 0x80, 0x6a, 0x57, 0x7c, 0xc5, 0x78,
	0x06, 0x67, 0x77, 0xb2, 0x28, 0x51, 0xff, 0x45, 0x8e, 0x29, 0x9c, 0xfe, 0x9e, 0x3f, 0xfe, 0x62,
	0xf8, 0x79, 0x24, 0xb9, 0xee, 0xd5, 0x6e, 0x50, 0xe7, 0xd3, 0x14, 0x4e, 0xd3, 0x9d, 0xe3, 0xd3,
	0x7d, 0xc6, 0x8f, 0xc5, 0x20, 0xb3, 0x1a, 0x33, 0xdf, 0xfc, 0x0a, 0x00, 0x00, 0xff, 0xff, 0xd1,
	0xc0, 0xf2, 0x3d, 0x0d, 0x05, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConnInterface

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion6

// EspressoClient is the client API for Espresso service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type EspressoClient interface {
	GroupHeadTemperature(ctx context.Context, in *TemperatureStreamRequest, opts ...grpc.CallOption) (Espresso_GroupHeadTemperatureClient, error)
	BoilerTemperature(ctx context.Context, in *TemperatureStreamRequest, opts ...grpc.CallOption) (Espresso_BoilerTemperatureClient, error)
	GetConfiguration(ctx context.Context, in *GetConfigurationRequest, opts ...grpc.CallOption) (*GetConfigurationResponse, error)
	SetConfiguration(ctx context.Context, in *SetConfigurationRequest, opts ...grpc.CallOption) (*SetConfigurationResponse, error)
}

type espressoClient struct {
	cc grpc.ClientConnInterface
}

func NewEspressoClient(cc grpc.ClientConnInterface) EspressoClient {
	return &espressoClient{cc}
}

func (c *espressoClient) GroupHeadTemperature(ctx context.Context, in *TemperatureStreamRequest, opts ...grpc.CallOption) (Espresso_GroupHeadTemperatureClient, error) {
	stream, err := c.cc.NewStream(ctx, &_Espresso_serviceDesc.Streams[0], "/espressopb.Espresso/GroupHeadTemperature", opts...)
	if err != nil {
		return nil, err
	}
	x := &espressoGroupHeadTemperatureClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type Espresso_GroupHeadTemperatureClient interface {
	Recv() (*TemperatureStreamResponse, error)
	grpc.ClientStream
}

type espressoGroupHeadTemperatureClient struct {
	grpc.ClientStream
}

func (x *espressoGroupHeadTemperatureClient) Recv() (*TemperatureStreamResponse, error) {
	m := new(TemperatureStreamResponse)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func (c *espressoClient) BoilerTemperature(ctx context.Context, in *TemperatureStreamRequest, opts ...grpc.CallOption) (Espresso_BoilerTemperatureClient, error) {
	stream, err := c.cc.NewStream(ctx, &_Espresso_serviceDesc.Streams[1], "/espressopb.Espresso/BoilerTemperature", opts...)
	if err != nil {
		return nil, err
	}
	x := &espressoBoilerTemperatureClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type Espresso_BoilerTemperatureClient interface {
	Recv() (*TemperatureStreamResponse, error)
	grpc.ClientStream
}

type espressoBoilerTemperatureClient struct {
	grpc.ClientStream
}

func (x *espressoBoilerTemperatureClient) Recv() (*TemperatureStreamResponse, error) {
	m := new(TemperatureStreamResponse)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func (c *espressoClient) GetConfiguration(ctx context.Context, in *GetConfigurationRequest, opts ...grpc.CallOption) (*GetConfigurationResponse, error) {
	out := new(GetConfigurationResponse)
	err := c.cc.Invoke(ctx, "/espressopb.Espresso/GetConfiguration", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *espressoClient) SetConfiguration(ctx context.Context, in *SetConfigurationRequest, opts ...grpc.CallOption) (*SetConfigurationResponse, error) {
	out := new(SetConfigurationResponse)
	err := c.cc.Invoke(ctx, "/espressopb.Espresso/SetConfiguration", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// EspressoServer is the server API for Espresso service.
type EspressoServer interface {
	GroupHeadTemperature(*TemperatureStreamRequest, Espresso_GroupHeadTemperatureServer) error
	BoilerTemperature(*TemperatureStreamRequest, Espresso_BoilerTemperatureServer) error
	GetConfiguration(context.Context, *GetConfigurationRequest) (*GetConfigurationResponse, error)
	SetConfiguration(context.Context, *SetConfigurationRequest) (*SetConfigurationResponse, error)
}

// UnimplementedEspressoServer can be embedded to have forward compatible implementations.
type UnimplementedEspressoServer struct {
}

func (*UnimplementedEspressoServer) GroupHeadTemperature(req *TemperatureStreamRequest, srv Espresso_GroupHeadTemperatureServer) error {
	return status.Errorf(codes.Unimplemented, "method GroupHeadTemperature not implemented")
}
func (*UnimplementedEspressoServer) BoilerTemperature(req *TemperatureStreamRequest, srv Espresso_BoilerTemperatureServer) error {
	return status.Errorf(codes.Unimplemented, "method BoilerTemperature not implemented")
}
func (*UnimplementedEspressoServer) GetConfiguration(ctx context.Context, req *GetConfigurationRequest) (*GetConfigurationResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetConfiguration not implemented")
}
func (*UnimplementedEspressoServer) SetConfiguration(ctx context.Context, req *SetConfigurationRequest) (*SetConfigurationResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method SetConfiguration not implemented")
}

func RegisterEspressoServer(s *grpc.Server, srv EspressoServer) {
	s.RegisterService(&_Espresso_serviceDesc, srv)
}

func _Espresso_GroupHeadTemperature_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(TemperatureStreamRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(EspressoServer).GroupHeadTemperature(m, &espressoGroupHeadTemperatureServer{stream})
}

type Espresso_GroupHeadTemperatureServer interface {
	Send(*TemperatureStreamResponse) error
	grpc.ServerStream
}

type espressoGroupHeadTemperatureServer struct {
	grpc.ServerStream
}

func (x *espressoGroupHeadTemperatureServer) Send(m *TemperatureStreamResponse) error {
	return x.ServerStream.SendMsg(m)
}

func _Espresso_BoilerTemperature_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(TemperatureStreamRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(EspressoServer).BoilerTemperature(m, &espressoBoilerTemperatureServer{stream})
}

type Espresso_BoilerTemperatureServer interface {
	Send(*TemperatureStreamResponse) error
	grpc.ServerStream
}

type espressoBoilerTemperatureServer struct {
	grpc.ServerStream
}

func (x *espressoBoilerTemperatureServer) Send(m *TemperatureStreamResponse) error {
	return x.ServerStream.SendMsg(m)
}

func _Espresso_GetConfiguration_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetConfigurationRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(EspressoServer).GetConfiguration(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/espressopb.Espresso/GetConfiguration",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(EspressoServer).GetConfiguration(ctx, req.(*GetConfigurationRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Espresso_SetConfiguration_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(SetConfigurationRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(EspressoServer).SetConfiguration(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/espressopb.Espresso/SetConfiguration",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(EspressoServer).SetConfiguration(ctx, req.(*SetConfigurationRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _Espresso_serviceDesc = grpc.ServiceDesc{
	ServiceName: "espressopb.Espresso",
	HandlerType: (*EspressoServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetConfiguration",
			Handler:    _Espresso_GetConfiguration_Handler,
		},
		{
			MethodName: "SetConfiguration",
			Handler:    _Espresso_SetConfiguration_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "GroupHeadTemperature",
			Handler:       _Espresso_GroupHeadTemperature_Handler,
			ServerStreams: true,
		},
		{
			StreamName:    "BoilerTemperature",
			Handler:       _Espresso_BoilerTemperature_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "espresso.proto",
}
