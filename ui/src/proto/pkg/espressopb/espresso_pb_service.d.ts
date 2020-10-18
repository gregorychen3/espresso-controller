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

type EspressoGetTargetTemperature = {
  readonly methodName: string;
  readonly service: typeof Espresso;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pkg_espressopb_espresso_pb.GetTargetTemperatureRequest;
  readonly responseType: typeof pkg_espressopb_espresso_pb.GetTargetTemperatureResponse;
};

type EspressoSetTargetTemperature = {
  readonly methodName: string;
  readonly service: typeof Espresso;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pkg_espressopb_espresso_pb.SetTargetTemperatureRequest;
  readonly responseType: typeof pkg_espressopb_espresso_pb.SetTargetTemperatureResponse;
};

type EspressoSetTerms = {
  readonly methodName: string;
  readonly service: typeof Espresso;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pkg_espressopb_espresso_pb.SetTermsRequest;
  readonly responseType: typeof pkg_espressopb_espresso_pb.SetTermsResponse;
};

export class Espresso {
  static readonly serviceName: string;
  static readonly GroupHeadTemperature: EspressoGroupHeadTemperature;
  static readonly BoilerTemperature: EspressoBoilerTemperature;
  static readonly GetTargetTemperature: EspressoGetTargetTemperature;
  static readonly SetTargetTemperature: EspressoSetTargetTemperature;
  static readonly SetTerms: EspressoSetTerms;
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
  getTargetTemperature(
    requestMessage: pkg_espressopb_espresso_pb.GetTargetTemperatureRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pkg_espressopb_espresso_pb.GetTargetTemperatureResponse|null) => void
  ): UnaryResponse;
  getTargetTemperature(
    requestMessage: pkg_espressopb_espresso_pb.GetTargetTemperatureRequest,
    callback: (error: ServiceError|null, responseMessage: pkg_espressopb_espresso_pb.GetTargetTemperatureResponse|null) => void
  ): UnaryResponse;
  setTargetTemperature(
    requestMessage: pkg_espressopb_espresso_pb.SetTargetTemperatureRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pkg_espressopb_espresso_pb.SetTargetTemperatureResponse|null) => void
  ): UnaryResponse;
  setTargetTemperature(
    requestMessage: pkg_espressopb_espresso_pb.SetTargetTemperatureRequest,
    callback: (error: ServiceError|null, responseMessage: pkg_espressopb_espresso_pb.SetTargetTemperatureResponse|null) => void
  ): UnaryResponse;
  setTerms(
    requestMessage: pkg_espressopb_espresso_pb.SetTermsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pkg_espressopb_espresso_pb.SetTermsResponse|null) => void
  ): UnaryResponse;
  setTerms(
    requestMessage: pkg_espressopb_espresso_pb.SetTermsRequest,
    callback: (error: ServiceError|null, responseMessage: pkg_espressopb_espresso_pb.SetTermsResponse|null) => void
  ): UnaryResponse;
}

