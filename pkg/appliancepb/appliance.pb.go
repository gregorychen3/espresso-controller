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

type GetBoilerTemperatureHistoryRequest struct {
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *GetBoilerTemperatureHistoryRequest) Reset()         { *m = GetBoilerTemperatureHistoryRequest{} }
func (m *GetBoilerTemperatureHistoryRequest) String() string { return proto.CompactTextString(m) }
func (*GetBoilerTemperatureHistoryRequest) ProtoMessage()    {}
func (*GetBoilerTemperatureHistoryRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_cb8bec84a49a6ea7, []int{2}
}

func (m *GetBoilerTemperatureHistoryRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GetBoilerTemperatureHistoryRequest.Unmarshal(m, b)
}
func (m *GetBoilerTemperatureHistoryRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GetBoilerTemperatureHistoryRequest.Marshal(b, m, deterministic)
}
func (m *GetBoilerTemperatureHistoryRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GetBoilerTemperatureHistoryRequest.Merge(m, src)
}
func (m *GetBoilerTemperatureHistoryRequest) XXX_Size() int {
	return xxx_messageInfo_GetBoilerTemperatureHistoryRequest.Size(m)
}
func (m *GetBoilerTemperatureHistoryRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_GetBoilerTemperatureHistoryRequest.DiscardUnknown(m)
}

var xxx_messageInfo_GetBoilerTemperatureHistoryRequest proto.InternalMessageInfo

type GetBoilerTemperatureHistoryResponse struct {
	Samples              []*TemperatureSample `protobuf:"bytes,1,rep,name=samples,proto3" json:"samples,omitempty"`
	XXX_NoUnkeyedLiteral struct{}             `json:"-"`
	XXX_unrecognized     []byte               `json:"-"`
	XXX_sizecache        int32                `json:"-"`
}

func (m *GetBoilerTemperatureHistoryResponse) Reset()         { *m = GetBoilerTemperatureHistoryResponse{} }
func (m *GetBoilerTemperatureHistoryResponse) String() string { return proto.CompactTextString(m) }
func (*GetBoilerTemperatureHistoryResponse) ProtoMessage()    {}
func (*GetBoilerTemperatureHistoryResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_cb8bec84a49a6ea7, []int{3}
}

func (m *GetBoilerTemperatureHistoryResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GetBoilerTemperatureHistoryResponse.Unmarshal(m, b)
}
func (m *GetBoilerTemperatureHistoryResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GetBoilerTemperatureHistoryResponse.Marshal(b, m, deterministic)
}
func (m *GetBoilerTemperatureHistoryResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GetBoilerTemperatureHistoryResponse.Merge(m, src)
}
func (m *GetBoilerTemperatureHistoryResponse) XXX_Size() int {
	return xxx_messageInfo_GetBoilerTemperatureHistoryResponse.Size(m)
}
func (m *GetBoilerTemperatureHistoryResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_GetBoilerTemperatureHistoryResponse.DiscardUnknown(m)
}

var xxx_messageInfo_GetBoilerTemperatureHistoryResponse proto.InternalMessageInfo

func (m *GetBoilerTemperatureHistoryResponse) GetSamples() []*TemperatureSample {
	if m != nil {
		return m.Samples
	}
	return nil
}

type GetCurrentBoilerTemperatureRequest struct {
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *GetCurrentBoilerTemperatureRequest) Reset()         { *m = GetCurrentBoilerTemperatureRequest{} }
func (m *GetCurrentBoilerTemperatureRequest) String() string { return proto.CompactTextString(m) }
func (*GetCurrentBoilerTemperatureRequest) ProtoMessage()    {}
func (*GetCurrentBoilerTemperatureRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_cb8bec84a49a6ea7, []int{4}
}

func (m *GetCurrentBoilerTemperatureRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GetCurrentBoilerTemperatureRequest.Unmarshal(m, b)
}
func (m *GetCurrentBoilerTemperatureRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GetCurrentBoilerTemperatureRequest.Marshal(b, m, deterministic)
}
func (m *GetCurrentBoilerTemperatureRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GetCurrentBoilerTemperatureRequest.Merge(m, src)
}
func (m *GetCurrentBoilerTemperatureRequest) XXX_Size() int {
	return xxx_messageInfo_GetCurrentBoilerTemperatureRequest.Size(m)
}
func (m *GetCurrentBoilerTemperatureRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_GetCurrentBoilerTemperatureRequest.DiscardUnknown(m)
}

var xxx_messageInfo_GetCurrentBoilerTemperatureRequest proto.InternalMessageInfo

type GetCurrentBoilerTemperatureResponse struct {
	Sample               *TemperatureSample `protobuf:"bytes,1,opt,name=sample,proto3" json:"sample,omitempty"`
	XXX_NoUnkeyedLiteral struct{}           `json:"-"`
	XXX_unrecognized     []byte             `json:"-"`
	XXX_sizecache        int32              `json:"-"`
}

func (m *GetCurrentBoilerTemperatureResponse) Reset()         { *m = GetCurrentBoilerTemperatureResponse{} }
func (m *GetCurrentBoilerTemperatureResponse) String() string { return proto.CompactTextString(m) }
func (*GetCurrentBoilerTemperatureResponse) ProtoMessage()    {}
func (*GetCurrentBoilerTemperatureResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_cb8bec84a49a6ea7, []int{5}
}

func (m *GetCurrentBoilerTemperatureResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GetCurrentBoilerTemperatureResponse.Unmarshal(m, b)
}
func (m *GetCurrentBoilerTemperatureResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GetCurrentBoilerTemperatureResponse.Marshal(b, m, deterministic)
}
func (m *GetCurrentBoilerTemperatureResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GetCurrentBoilerTemperatureResponse.Merge(m, src)
}
func (m *GetCurrentBoilerTemperatureResponse) XXX_Size() int {
	return xxx_messageInfo_GetCurrentBoilerTemperatureResponse.Size(m)
}
func (m *GetCurrentBoilerTemperatureResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_GetCurrentBoilerTemperatureResponse.DiscardUnknown(m)
}

var xxx_messageInfo_GetCurrentBoilerTemperatureResponse proto.InternalMessageInfo

func (m *GetCurrentBoilerTemperatureResponse) GetSample() *TemperatureSample {
	if m != nil {
		return m.Sample
	}
	return nil
}

type BoilerTemperatureRequest struct {
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *BoilerTemperatureRequest) Reset()         { *m = BoilerTemperatureRequest{} }
func (m *BoilerTemperatureRequest) String() string { return proto.CompactTextString(m) }
func (*BoilerTemperatureRequest) ProtoMessage()    {}
func (*BoilerTemperatureRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_cb8bec84a49a6ea7, []int{6}
}

func (m *BoilerTemperatureRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_BoilerTemperatureRequest.Unmarshal(m, b)
}
func (m *BoilerTemperatureRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_BoilerTemperatureRequest.Marshal(b, m, deterministic)
}
func (m *BoilerTemperatureRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_BoilerTemperatureRequest.Merge(m, src)
}
func (m *BoilerTemperatureRequest) XXX_Size() int {
	return xxx_messageInfo_BoilerTemperatureRequest.Size(m)
}
func (m *BoilerTemperatureRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_BoilerTemperatureRequest.DiscardUnknown(m)
}

var xxx_messageInfo_BoilerTemperatureRequest proto.InternalMessageInfo

type BoilerTemperatureResponse struct {
	// Types that are valid to be assigned to Data:
	//	*BoilerTemperatureResponse_History
	//	*BoilerTemperatureResponse_Sample
	Data                 isBoilerTemperatureResponse_Data `protobuf_oneof:"data"`
	XXX_NoUnkeyedLiteral struct{}                         `json:"-"`
	XXX_unrecognized     []byte                           `json:"-"`
	XXX_sizecache        int32                            `json:"-"`
}

func (m *BoilerTemperatureResponse) Reset()         { *m = BoilerTemperatureResponse{} }
func (m *BoilerTemperatureResponse) String() string { return proto.CompactTextString(m) }
func (*BoilerTemperatureResponse) ProtoMessage()    {}
func (*BoilerTemperatureResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_cb8bec84a49a6ea7, []int{7}
}

func (m *BoilerTemperatureResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_BoilerTemperatureResponse.Unmarshal(m, b)
}
func (m *BoilerTemperatureResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_BoilerTemperatureResponse.Marshal(b, m, deterministic)
}
func (m *BoilerTemperatureResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_BoilerTemperatureResponse.Merge(m, src)
}
func (m *BoilerTemperatureResponse) XXX_Size() int {
	return xxx_messageInfo_BoilerTemperatureResponse.Size(m)
}
func (m *BoilerTemperatureResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_BoilerTemperatureResponse.DiscardUnknown(m)
}

var xxx_messageInfo_BoilerTemperatureResponse proto.InternalMessageInfo

type isBoilerTemperatureResponse_Data interface {
	isBoilerTemperatureResponse_Data()
}

type BoilerTemperatureResponse_History struct {
	History *TemperatureHistory `protobuf:"bytes,1,opt,name=history,proto3,oneof"`
}

type BoilerTemperatureResponse_Sample struct {
	Sample *TemperatureSample `protobuf:"bytes,2,opt,name=sample,proto3,oneof"`
}

func (*BoilerTemperatureResponse_History) isBoilerTemperatureResponse_Data() {}

func (*BoilerTemperatureResponse_Sample) isBoilerTemperatureResponse_Data() {}

func (m *BoilerTemperatureResponse) GetData() isBoilerTemperatureResponse_Data {
	if m != nil {
		return m.Data
	}
	return nil
}

func (m *BoilerTemperatureResponse) GetHistory() *TemperatureHistory {
	if x, ok := m.GetData().(*BoilerTemperatureResponse_History); ok {
		return x.History
	}
	return nil
}

func (m *BoilerTemperatureResponse) GetSample() *TemperatureSample {
	if x, ok := m.GetData().(*BoilerTemperatureResponse_Sample); ok {
		return x.Sample
	}
	return nil
}

// XXX_OneofWrappers is for the internal use of the proto package.
func (*BoilerTemperatureResponse) XXX_OneofWrappers() []interface{} {
	return []interface{}{
		(*BoilerTemperatureResponse_History)(nil),
		(*BoilerTemperatureResponse_Sample)(nil),
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
	return fileDescriptor_cb8bec84a49a6ea7, []int{8}
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
	return fileDescriptor_cb8bec84a49a6ea7, []int{9}
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
	return fileDescriptor_cb8bec84a49a6ea7, []int{10}
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
	return fileDescriptor_cb8bec84a49a6ea7, []int{11}
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
	proto.RegisterType((*GetBoilerTemperatureHistoryRequest)(nil), "appliancepb.GetBoilerTemperatureHistoryRequest")
	proto.RegisterType((*GetBoilerTemperatureHistoryResponse)(nil), "appliancepb.GetBoilerTemperatureHistoryResponse")
	proto.RegisterType((*GetCurrentBoilerTemperatureRequest)(nil), "appliancepb.GetCurrentBoilerTemperatureRequest")
	proto.RegisterType((*GetCurrentBoilerTemperatureResponse)(nil), "appliancepb.GetCurrentBoilerTemperatureResponse")
	proto.RegisterType((*BoilerTemperatureRequest)(nil), "appliancepb.BoilerTemperatureRequest")
	proto.RegisterType((*BoilerTemperatureResponse)(nil), "appliancepb.BoilerTemperatureResponse")
	proto.RegisterType((*GetTargetTemperatureRequest)(nil), "appliancepb.GetTargetTemperatureRequest")
	proto.RegisterType((*GetTargetTemperatureResponse)(nil), "appliancepb.GetTargetTemperatureResponse")
	proto.RegisterType((*SetTargetTemperatureRequest)(nil), "appliancepb.SetTargetTemperatureRequest")
	proto.RegisterType((*SetTargetTemperatureResponse)(nil), "appliancepb.SetTargetTemperatureResponse")
}

func init() {
	proto.RegisterFile("appliance.proto", fileDescriptor_cb8bec84a49a6ea7)
}

var fileDescriptor_cb8bec84a49a6ea7 = []byte{
	// 421 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xbc, 0x92, 0xcf, 0x6e, 0xd3, 0x40,
	0x10, 0x87, 0xe3, 0x40, 0x53, 0x31, 0x3e, 0xa0, 0xae, 0x7a, 0x30, 0x2e, 0x50, 0x6b, 0xf9, 0x23,
	0x73, 0x71, 0x21, 0x48, 0xa8, 0x52, 0x0f, 0x28, 0xe5, 0xd0, 0x9c, 0x38, 0xd8, 0xb9, 0xa2, 0x6a,
	0x4d, 0xa6, 0xc1, 0x92, 0x9d, 0x5d, 0x76, 0xc7, 0x95, 0x78, 0x15, 0x5e, 0x8a, 0x57, 0x42, 0xb5,
	0xbd, 0x25, 0x91, 0xe3, 0xd8, 0x12, 0x52, 0x8f, 0x99, 0xfd, 0x65, 0xbe, 0xcf, 0x33, 0x03, 0x4f,
	0x85, 0x52, 0x79, 0x26, 0xd6, 0xdf, 0x31, 0x52, 0x5a, 0x92, 0x64, 0xee, 0x7d, 0x41, 0xa5, 0xfe,
	0xe9, 0x4a, 0xca, 0x55, 0x8e, 0x67, 0xd5, 0x53, 0x5a, 0xde, 0x9c, 0x51, 0x56, 0xa0, 0x21, 0x51,
	0xa8, 0x3a, 0xcd, 0x6f, 0xe0, 0x68, 0x81, 0x85, 0x42, 0x2d, 0xa8, 0xd4, 0x98, 0x88, 0x42, 0xe5,
	0xc8, 0x8e, 0xe1, 0xe0, 0x56, 0xe4, 0x25, 0x7a, 0x4e, 0xe0, 0x84, 0x4e, 0x5c, 0xff, 0x60, 0x17,
	0xe0, 0xca, 0xd4, 0xa0, 0xbe, 0xc5, 0xe5, 0xb5, 0x20, 0x6f, 0x1c, 0x38, 0xa1, 0x3b, 0xf5, 0xa3,
	0x9a, 0x10, 0x59, 0x42, 0xb4, 0xb0, 0x84, 0x18, 0x6c, 0x7c, 0x46, 0xfc, 0x2b, 0xb0, 0x0d, 0xce,
	0x3c, 0x33, 0x24, 0xf5, 0x2f, 0x76, 0x0e, 0x87, 0xa6, 0x42, 0x1a, 0xcf, 0x09, 0x1e, 0x85, 0xee,
	0xf4, 0x65, 0xb4, 0x61, 0x1f, 0xb5, 0xcc, 0x62, 0x1b, 0xe7, 0xaf, 0x81, 0x5f, 0x21, 0x5d, 0xca,
	0x2c, 0x47, 0xdd, 0x6e, 0x1c, 0xe3, 0xcf, 0x12, 0x0d, 0xf1, 0x6b, 0x78, 0xb5, 0x37, 0x65, 0x94,
	0x5c, 0x1b, 0xfc, 0x6f, 0x8d, 0x2f, 0xa5, 0xd6, 0xb8, 0x6e, 0x73, 0xac, 0xc6, 0xb7, 0x4a, 0xa3,
	0x3b, 0xd5, 0x68, 0x7c, 0x82, 0x49, 0xdd, 0xb7, 0x9a, 0x7b, 0xbf, 0x45, 0x93, 0xe6, 0x3e, 0x78,
	0x9d, 0xe8, 0xdf, 0x0e, 0x3c, 0xeb, 0x26, 0x5e, 0xc0, 0xe1, 0x8f, 0x7a, 0x16, 0x0d, 0xf2, 0xb4,
	0x0b, 0xd9, 0x8c, 0x6c, 0x3e, 0x8a, 0xed, 0x3f, 0xd8, 0xf9, 0xbd, 0xee, 0x78, 0x88, 0xee, 0x7c,
	0x64, 0x85, 0x2f, 0x27, 0xf0, 0x78, 0x29, 0x48, 0xf0, 0x17, 0x70, 0x72, 0x85, 0xb4, 0x10, 0x7a,
	0x85, 0xb4, 0xc3, 0xdd, 0xc0, 0xf3, 0xdd, 0xcf, 0x8d, 0x7d, 0x00, 0x2e, 0xfd, 0x2b, 0x37, 0xc7,
	0xba, 0x59, 0x62, 0x1f, 0x60, 0x62, 0x90, 0x86, 0x5d, 0xeb, 0x81, 0x41, 0x9a, 0x11, 0xff, 0x0c,
	0x27, 0x49, 0xb7, 0x53, 0x3f, 0xf3, 0xce, 0x3a, 0x79, 0x68, 0xeb, 0xe9, 0x9f, 0x31, 0x3c, 0x99,
	0xd9, 0xe9, 0xb3, 0x25, 0x1c, 0xb5, 0x76, 0xce, 0xde, 0x6c, 0xad, 0xa7, 0xeb, 0x60, 0xfc, 0xb7,
	0x7d, 0xb1, 0xfa, 0x33, 0xde, 0x3b, 0xac, 0x80, 0xe3, 0x5d, 0xeb, 0x61, 0xe1, 0x56, 0x87, 0x3d,
	0x0b, 0xf6, 0xdf, 0x0d, 0x48, 0xd6, 0x38, 0x3e, 0xba, 0xc3, 0x25, 0xfd, 0xb8, 0x64, 0x30, 0x2e,
	0xd9, 0x8b, 0x4b, 0x27, 0xd5, 0xb0, 0x3f, 0xfe, 0x0d, 0x00, 0x00, 0xff, 0xff, 0x5b, 0x4c, 0xed,
	0xbf, 0x60, 0x05, 0x00, 0x00,
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
	BoilerTemperature(ctx context.Context, in *BoilerTemperatureRequest, opts ...grpc.CallOption) (Appliance_BoilerTemperatureClient, error)
	GetTargetTemperature(ctx context.Context, in *GetTargetTemperatureRequest, opts ...grpc.CallOption) (*GetTargetTemperatureResponse, error)
	SetTargetTemperature(ctx context.Context, in *SetTargetTemperatureRequest, opts ...grpc.CallOption) (*SetTargetTemperatureResponse, error)
}

type applianceClient struct {
	cc grpc.ClientConnInterface
}

func NewApplianceClient(cc grpc.ClientConnInterface) ApplianceClient {
	return &applianceClient{cc}
}

func (c *applianceClient) BoilerTemperature(ctx context.Context, in *BoilerTemperatureRequest, opts ...grpc.CallOption) (Appliance_BoilerTemperatureClient, error) {
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
	Recv() (*BoilerTemperatureResponse, error)
	grpc.ClientStream
}

type applianceBoilerTemperatureClient struct {
	grpc.ClientStream
}

func (x *applianceBoilerTemperatureClient) Recv() (*BoilerTemperatureResponse, error) {
	m := new(BoilerTemperatureResponse)
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
	BoilerTemperature(*BoilerTemperatureRequest, Appliance_BoilerTemperatureServer) error
	GetTargetTemperature(context.Context, *GetTargetTemperatureRequest) (*GetTargetTemperatureResponse, error)
	SetTargetTemperature(context.Context, *SetTargetTemperatureRequest) (*SetTargetTemperatureResponse, error)
}

// UnimplementedApplianceServer can be embedded to have forward compatible implementations.
type UnimplementedApplianceServer struct {
}

func (*UnimplementedApplianceServer) BoilerTemperature(req *BoilerTemperatureRequest, srv Appliance_BoilerTemperatureServer) error {
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
	m := new(BoilerTemperatureRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(ApplianceServer).BoilerTemperature(m, &applianceBoilerTemperatureServer{stream})
}

type Appliance_BoilerTemperatureServer interface {
	Send(*BoilerTemperatureResponse) error
	grpc.ServerStream
}

type applianceBoilerTemperatureServer struct {
	grpc.ServerStream
}

func (x *applianceBoilerTemperatureServer) Send(m *BoilerTemperatureResponse) error {
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
