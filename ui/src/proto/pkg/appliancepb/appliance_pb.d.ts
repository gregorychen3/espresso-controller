// package: appliancepb
// file: pkg/appliancepb/appliance.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class GetCurrentTemperatureRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCurrentTemperatureRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCurrentTemperatureRequest): GetCurrentTemperatureRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCurrentTemperatureRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCurrentTemperatureRequest;
  static deserializeBinaryFromReader(message: GetCurrentTemperatureRequest, reader: jspb.BinaryReader): GetCurrentTemperatureRequest;
}

export namespace GetCurrentTemperatureRequest {
  export type AsObject = {
  }
}

export class GetCurrentTemperatureResponse extends jspb.Message {
  getTemperature(): number;
  setTemperature(value: number): void;

  hasObservedAt(): boolean;
  clearObservedAt(): void;
  getObservedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setObservedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCurrentTemperatureResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCurrentTemperatureResponse): GetCurrentTemperatureResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCurrentTemperatureResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCurrentTemperatureResponse;
  static deserializeBinaryFromReader(message: GetCurrentTemperatureResponse, reader: jspb.BinaryReader): GetCurrentTemperatureResponse;
}

export namespace GetCurrentTemperatureResponse {
  export type AsObject = {
    temperature: number,
    observedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class GetTargetTemperatureRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTargetTemperatureRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTargetTemperatureRequest): GetTargetTemperatureRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTargetTemperatureRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTargetTemperatureRequest;
  static deserializeBinaryFromReader(message: GetTargetTemperatureRequest, reader: jspb.BinaryReader): GetTargetTemperatureRequest;
}

export namespace GetTargetTemperatureRequest {
  export type AsObject = {
  }
}

export class GetTargetTemperatureResponse extends jspb.Message {
  getTemperature(): number;
  setTemperature(value: number): void;

  hasSetAt(): boolean;
  clearSetAt(): void;
  getSetAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setSetAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTargetTemperatureResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTargetTemperatureResponse): GetTargetTemperatureResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTargetTemperatureResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTargetTemperatureResponse;
  static deserializeBinaryFromReader(message: GetTargetTemperatureResponse, reader: jspb.BinaryReader): GetTargetTemperatureResponse;
}

export namespace GetTargetTemperatureResponse {
  export type AsObject = {
    temperature: number,
    setAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class SetTargetTemperatureRequest extends jspb.Message {
  getTemperature(): number;
  setTemperature(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetTargetTemperatureRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetTargetTemperatureRequest): SetTargetTemperatureRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetTargetTemperatureRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetTargetTemperatureRequest;
  static deserializeBinaryFromReader(message: SetTargetTemperatureRequest, reader: jspb.BinaryReader): SetTargetTemperatureRequest;
}

export namespace SetTargetTemperatureRequest {
  export type AsObject = {
    temperature: number,
  }
}

export class SetTargetTemperatureResponse extends jspb.Message {
  getTemperature(): number;
  setTemperature(value: number): void;

  hasSetAt(): boolean;
  clearSetAt(): void;
  getSetAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setSetAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetTargetTemperatureResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetTargetTemperatureResponse): SetTargetTemperatureResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetTargetTemperatureResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetTargetTemperatureResponse;
  static deserializeBinaryFromReader(message: SetTargetTemperatureResponse, reader: jspb.BinaryReader): SetTargetTemperatureResponse;
}

export namespace SetTargetTemperatureResponse {
  export type AsObject = {
    temperature: number,
    setAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

