// package: espressopb
// file: pkg/espressopb/espresso.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class TemperatureSample extends jspb.Message {
  getValue(): number;
  setValue(value: number): void;

  hasObservedAt(): boolean;
  clearObservedAt(): void;
  getObservedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setObservedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TemperatureSample.AsObject;
  static toObject(includeInstance: boolean, msg: TemperatureSample): TemperatureSample.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: TemperatureSample, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TemperatureSample;
  static deserializeBinaryFromReader(message: TemperatureSample, reader: jspb.BinaryReader): TemperatureSample;
}

export namespace TemperatureSample {
  export type AsObject = {
    value: number;
    observedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
  };
}

export class WatchBoilerTemperatureRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WatchBoilerTemperatureRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WatchBoilerTemperatureRequest): WatchBoilerTemperatureRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: WatchBoilerTemperatureRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WatchBoilerTemperatureRequest;
  static deserializeBinaryFromReader(
    message: WatchBoilerTemperatureRequest,
    reader: jspb.BinaryReader
  ): WatchBoilerTemperatureRequest;
}

export namespace WatchBoilerTemperatureRequest {
  export type AsObject = {};
}

export class WatchBoilerTemperatureResponse extends jspb.Message {
  hasSample(): boolean;
  clearSample(): void;
  getSample(): TemperatureSample | undefined;
  setSample(value?: TemperatureSample): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WatchBoilerTemperatureResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: WatchBoilerTemperatureResponse
  ): WatchBoilerTemperatureResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: WatchBoilerTemperatureResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WatchBoilerTemperatureResponse;
  static deserializeBinaryFromReader(
    message: WatchBoilerTemperatureResponse,
    reader: jspb.BinaryReader
  ): WatchBoilerTemperatureResponse;
}

export namespace WatchBoilerTemperatureResponse {
  export type AsObject = {
    sample?: TemperatureSample.AsObject;
  };
}

export class GetPIDConfigRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPIDConfigRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPIDConfigRequest): GetPIDConfigRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: GetPIDConfigRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPIDConfigRequest;
  static deserializeBinaryFromReader(message: GetPIDConfigRequest, reader: jspb.BinaryReader): GetPIDConfigRequest;
}

export namespace GetPIDConfigRequest {
  export type AsObject = {};
}

export class PIDConfig extends jspb.Message {
  getTemperature(): number;
  setTemperature(value: number): void;

  getP(): number;
  setP(value: number): void;

  getI(): number;
  setI(value: number): void;

  getD(): number;
  setD(value: number): void;

  hasSetAt(): boolean;
  clearSetAt(): void;
  getSetAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setSetAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PIDConfig.AsObject;
  static toObject(includeInstance: boolean, msg: PIDConfig): PIDConfig.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: PIDConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PIDConfig;
  static deserializeBinaryFromReader(message: PIDConfig, reader: jspb.BinaryReader): PIDConfig;
}

export namespace PIDConfig {
  export type AsObject = {
    temperature: number;
    p: number;
    i: number;
    d: number;
    setAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
  };
}
