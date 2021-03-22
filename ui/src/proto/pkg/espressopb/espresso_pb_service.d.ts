// package: espressopb
// file: pkg/espressopb/espresso.proto

import * as pkg_espressopb_espresso_pb from "../../pkg/espressopb/espresso_pb";
import {grpc} from "@improbable-eng/grpc-web";

type EspressoWatchBoilerTemperature = {
  readonly methodName: string;
  readonly service: typeof Espresso;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof pkg_espressopb_espresso_pb.WatchBoilerTemperatureRequest;
  readonly responseType: typeof pkg_espressopb_espresso_pb.WatchBoilerTemperatureResponse;
};

type EspressoGetConfiguration = {
  readonly methodName: string;
  readonly service: typeof Espresso;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pkg_espressopb_espresso_pb.GetConfigurationRequest;
  readonly responseType: typeof pkg_espressopb_espresso_pb.Configuration;
};

type EspressoSetConfiguration = {
  readonly methodName: string;
  readonly service: typeof Espresso;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pkg_espressopb_espresso_pb.Configuration;
  readonly responseType: typeof pkg_espressopb_espresso_pb.Configuration;
};

export class Espresso {
  static readonly serviceName: string;
  static readonly WatchBoilerTemperature: EspressoWatchBoilerTemperature;
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
  watchBoilerTemperature(requestMessage: pkg_espressopb_espresso_pb.WatchBoilerTemperatureRequest, metadata?: grpc.Metadata): ResponseStream<pkg_espressopb_espresso_pb.WatchBoilerTemperatureResponse>;
  getConfiguration(
    requestMessage: pkg_espressopb_espresso_pb.GetConfigurationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pkg_espressopb_espresso_pb.Configuration|null) => void
  ): UnaryResponse;
  getConfiguration(
    requestMessage: pkg_espressopb_espresso_pb.GetConfigurationRequest,
    callback: (error: ServiceError|null, responseMessage: pkg_espressopb_espresso_pb.Configuration|null) => void
  ): UnaryResponse;
  setConfiguration(
    requestMessage: pkg_espressopb_espresso_pb.Configuration,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pkg_espressopb_espresso_pb.Configuration|null) => void
  ): UnaryResponse;
  setConfiguration(
    requestMessage: pkg_espressopb_espresso_pb.Configuration,
    callback: (error: ServiceError|null, responseMessage: pkg_espressopb_espresso_pb.Configuration|null) => void
  ): UnaryResponse;
}

