// package: espressopb
// file: pkg/espressopb/espresso.proto

import * as pkg_espressopb_espresso_pb from "../../pkg/espressopb/espresso_pb";
import {grpc} from "@improbable-eng/grpc-web";

type EspressoGroupHeadTemperature = {
  readonly methodName: string;
  readonly service: typeof Espresso;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof pkg_espressopb_espresso_pb.TemperatureStreamRequest;
  readonly responseType: typeof pkg_espressopb_espresso_pb.TemperatureStreamResponse;
};

type EspressoBoilerTemperature = {
  readonly methodName: string;
  readonly service: typeof Espresso;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof pkg_espressopb_espresso_pb.TemperatureStreamRequest;
  readonly responseType: typeof pkg_espressopb_espresso_pb.TemperatureStreamResponse;
};

type EspressoGetConfiguration = {
  readonly methodName: string;
  readonly service: typeof Espresso;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pkg_espressopb_espresso_pb.GetConfigurationRequest;
  readonly responseType: typeof pkg_espressopb_espresso_pb.GetConfigurationResponse;
};

type EspressoSetConfiguration = {
  readonly methodName: string;
  readonly service: typeof Espresso;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pkg_espressopb_espresso_pb.SetConfigurationRequest;
  readonly responseType: typeof pkg_espressopb_espresso_pb.SetConfigurationResponse;
};

export class Espresso {
  static readonly serviceName: string;
  static readonly GroupHeadTemperature: EspressoGroupHeadTemperature;
  static readonly BoilerTemperature: EspressoBoilerTemperature;
  static readonly GetConfiguration: EspressoGetConfiguration;
  static readonly SetConfiguration: EspressoSetConfiguration;
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

export class EspressoClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  groupHeadTemperature(requestMessage: pkg_espressopb_espresso_pb.TemperatureStreamRequest, metadata?: grpc.Metadata): ResponseStream<pkg_espressopb_espresso_pb.TemperatureStreamResponse>;
  boilerTemperature(requestMessage: pkg_espressopb_espresso_pb.TemperatureStreamRequest, metadata?: grpc.Metadata): ResponseStream<pkg_espressopb_espresso_pb.TemperatureStreamResponse>;
  getConfiguration(
    requestMessage: pkg_espressopb_espresso_pb.GetConfigurationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pkg_espressopb_espresso_pb.GetConfigurationResponse|null) => void
  ): UnaryResponse;
  getConfiguration(
    requestMessage: pkg_espressopb_espresso_pb.GetConfigurationRequest,
    callback: (error: ServiceError|null, responseMessage: pkg_espressopb_espresso_pb.GetConfigurationResponse|null) => void
  ): UnaryResponse;
  setConfiguration(
    requestMessage: pkg_espressopb_espresso_pb.SetConfigurationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pkg_espressopb_espresso_pb.SetConfigurationResponse|null) => void
  ): UnaryResponse;
  setConfiguration(
    requestMessage: pkg_espressopb_espresso_pb.SetConfigurationRequest,
    callback: (error: ServiceError|null, responseMessage: pkg_espressopb_espresso_pb.SetConfigurationResponse|null) => void
  ): UnaryResponse;
}

