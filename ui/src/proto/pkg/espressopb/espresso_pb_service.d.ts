// package: espressopb
// file: pkg/espressopb/espresso.proto

import { grpc } from "@improbable-eng/grpc-web";
import * as pkg_espressopb_espresso_pb from "../../pkg/espressopb/espresso_pb";

type EspressoWatchBoilerTemperature = {
  readonly methodName: string;
  readonly service: typeof Espresso;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof pkg_espressopb_espresso_pb.WatchBoilerTemperatureRequest;
  readonly responseType: typeof pkg_espressopb_espresso_pb.WatchBoilerTemperatureResponse;
};

type EspressoGetPIDConfig = {
  readonly methodName: string;
  readonly service: typeof Espresso;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pkg_espressopb_espresso_pb.GetPIDConfigRequest;
  readonly responseType: typeof pkg_espressopb_espresso_pb.PIDConfig;
};

type EspressoSetPIDConfig = {
  readonly methodName: string;
  readonly service: typeof Espresso;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pkg_espressopb_espresso_pb.PIDConfig;
  readonly responseType: typeof pkg_espressopb_espresso_pb.PIDConfig;
};

export class Espresso {
  static readonly serviceName: string;
  static readonly WatchBoilerTemperature: EspressoWatchBoilerTemperature;
  static readonly GetPIDConfig: EspressoGetPIDConfig;
  static readonly SetPIDConfig: EspressoSetPIDConfig;
}

export type ServiceError = { message: string; code: number; metadata: grpc.Metadata };
export type Status = { details: string; code: number; metadata: grpc.Metadata };

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: "data", handler: (message: T) => void): ResponseStream<T>;
  on(type: "end", handler: (status?: Status) => void): ResponseStream<T>;
  on(type: "status", handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: "end", handler: (status?: Status) => void): RequestStream<T>;
  on(type: "status", handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: "data", handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: "end", handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: "status", handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class EspressoClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  watchBoilerTemperature(
    requestMessage: pkg_espressopb_espresso_pb.WatchBoilerTemperatureRequest,
    metadata?: grpc.Metadata
  ): ResponseStream<pkg_espressopb_espresso_pb.WatchBoilerTemperatureResponse>;
  getPIDConfig(
    requestMessage: pkg_espressopb_espresso_pb.GetPIDConfigRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError | null, responseMessage: pkg_espressopb_espresso_pb.PIDConfig | null) => void
  ): UnaryResponse;
  getPIDConfig(
    requestMessage: pkg_espressopb_espresso_pb.GetPIDConfigRequest,
    callback: (error: ServiceError | null, responseMessage: pkg_espressopb_espresso_pb.PIDConfig | null) => void
  ): UnaryResponse;
  setPIDConfig(
    requestMessage: pkg_espressopb_espresso_pb.PIDConfig,
    metadata: grpc.Metadata,
    callback: (error: ServiceError | null, responseMessage: pkg_espressopb_espresso_pb.PIDConfig | null) => void
  ): UnaryResponse;
  setPIDConfig(
    requestMessage: pkg_espressopb_espresso_pb.PIDConfig,
    callback: (error: ServiceError | null, responseMessage: pkg_espressopb_espresso_pb.PIDConfig | null) => void
  ): UnaryResponse;
}
