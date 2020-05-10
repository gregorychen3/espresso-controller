// package: appliancepb
// file: pkg/appliancepb/appliance.proto

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
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TemperatureSample, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TemperatureSample;
  static deserializeBinaryFromReader(message: TemperatureSample, reader: jspb.BinaryReader): TemperatureSample;
}

export namespace TemperatureSample {
  export type AsObject = {
    value: number,
    observedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class TemperatureHistory extends jspb.Message {
  clearSamplesList(): void;
  getSamplesList(): Array<TemperatureSample>;
  setSamplesList(value: Array<TemperatureSample>): void;
  addSamples(value?: TemperatureSample, index?: number): TemperatureSample;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TemperatureHistory.AsObject;
  static toObject(includeInstance: boolean, msg: TemperatureHistory): TemperatureHistory.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TemperatureHistory, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TemperatureHistory;
  static deserializeBinaryFromReader(message: TemperatureHistory, reader: jspb.BinaryReader): TemperatureHistory;
}

export namespace TemperatureHistory {
  export type AsObject = {
    samplesList: Array<TemperatureSample.AsObject>,
  }
}

export class BoilerTemperatureRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BoilerTemperatureRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BoilerTemperatureRequest): BoilerTemperatureRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BoilerTemperatureRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BoilerTemperatureRequest;
  static deserializeBinaryFromReader(message: BoilerTemperatureRequest, reader: jspb.BinaryReader): BoilerTemperatureRequest;
}

export namespace BoilerTemperatureRequest {
  export type AsObject = {
  }
}

export class BoilerTemperatureResponse extends jspb.Message {
  hasHistory(): boolean;
  clearHistory(): void;
  getHistory(): TemperatureHistory | undefined;
  setHistory(value?: TemperatureHistory): void;

  hasSample(): boolean;
  clearSample(): void;
  getSample(): TemperatureSample | undefined;
  setSample(value?: TemperatureSample): void;

  getDataCase(): BoilerTemperatureResponse.DataCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BoilerTemperatureResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BoilerTemperatureResponse): BoilerTemperatureResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BoilerTemperatureResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BoilerTemperatureResponse;
  static deserializeBinaryFromReader(message: BoilerTemperatureResponse, reader: jspb.BinaryReader): BoilerTemperatureResponse;
}

export namespace BoilerTemperatureResponse {
  export type AsObject = {
    history?: TemperatureHistory.AsObject,
    sample?: TemperatureSample.AsObject,
  }

  export enum DataCase {
    DATA_NOT_SET = 0,
    HISTORY = 1,
    SAMPLE = 2,
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

