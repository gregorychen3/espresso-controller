// package: appliancepb
// file: pkg/appliancepb/appliance.proto

import * as pkg_appliancepb_appliance_pb from "../../pkg/appliancepb/appliance_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ApplianceGetCurrentTemperature = {
  readonly methodName: string;
  readonly service: typeof Appliance;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pkg_appliancepb_appliance_pb.GetCurrentTemperatureRequest;
  readonly responseType: typeof pkg_appliancepb_appliance_pb.GetCurrentTemperatureResponse;
};

type ApplianceGetTargetTemperature = {
  readonly methodName: string;
  readonly service: typeof Appliance;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pkg_appliancepb_appliance_pb.GetTargetTemperatureRequest;
  readonly responseType: typeof pkg_appliancepb_appliance_pb.GetTargetTemperatureResponse;
};

type ApplianceSetTargetTemperature = {
  readonly methodName: string;
  readonly service: typeof Appliance;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pkg_appliancepb_appliance_pb.SetTargetTemperatureRequest;
  readonly responseType: typeof pkg_appliancepb_appliance_pb.SetTargetTemperatureResponse;
};

export class Appliance {
  static readonly serviceName: string;
  static readonly GetCurrentTemperature: ApplianceGetCurrentTemperature;
  static readonly GetTargetTemperature: ApplianceGetTargetTemperature;
  static readonly SetTargetTemperature: ApplianceSetTargetTemperature;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class ApplianceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getCurrentTemperature(
    requestMessage: pkg_appliancepb_appliance_pb.GetCurrentTemperatureRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pkg_appliancepb_appliance_pb.GetCurrentTemperatureResponse|null) => void
  ): UnaryResponse;
  getCurrentTemperature(
    requestMessage: pkg_appliancepb_appliance_pb.GetCurrentTemperatureRequest,
    callback: (error: ServiceError|null, responseMessage: pkg_appliancepb_appliance_pb.GetCurrentTemperatureResponse|null) => void
  ): UnaryResponse;
  getTargetTemperature(
    requestMessage: pkg_appliancepb_appliance_pb.GetTargetTemperatureRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pkg_appliancepb_appliance_pb.GetTargetTemperatureResponse|null) => void
  ): UnaryResponse;
  getTargetTemperature(
    requestMessage: pkg_appliancepb_appliance_pb.GetTargetTemperatureRequest,
    callback: (error: ServiceError|null, responseMessage: pkg_appliancepb_appliance_pb.GetTargetTemperatureResponse|null) => void
  ): UnaryResponse;
  setTargetTemperature(
    requestMessage: pkg_appliancepb_appliance_pb.SetTargetTemperatureRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pkg_appliancepb_appliance_pb.SetTargetTemperatureResponse|null) => void
  ): UnaryResponse;
  setTargetTemperature(
    requestMessage: pkg_appliancepb_appliance_pb.SetTargetTemperatureRequest,
    callback: (error: ServiceError|null, responseMessage: pkg_appliancepb_appliance_pb.SetTargetTemperatureResponse|null) => void
  ): UnaryResponse;
}

