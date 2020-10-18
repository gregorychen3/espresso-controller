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

export class TemperatureStreamRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TemperatureStreamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TemperatureStreamRequest): TemperatureStreamRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TemperatureStreamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TemperatureStreamRequest;
  static deserializeBinaryFromReader(message: TemperatureStreamRequest, reader: jspb.BinaryReader): TemperatureStreamRequest;
}

export namespace TemperatureStreamRequest {
  export type AsObject = {
  }
}

export class TemperatureStreamResponse extends jspb.Message {
  hasHistory(): boolean;
  clearHistory(): void;
  getHistory(): TemperatureHistory | undefined;
  setHistory(value?: TemperatureHistory): void;

  hasSample(): boolean;
  clearSample(): void;
  getSample(): TemperatureSample | undefined;
  setSample(value?: TemperatureSample): void;

  getDataCase(): TemperatureStreamResponse.DataCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TemperatureStreamResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TemperatureStreamResponse): TemperatureStreamResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TemperatureStreamResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TemperatureStreamResponse;
  static deserializeBinaryFromReader(message: TemperatureStreamResponse, reader: jspb.BinaryReader): TemperatureStreamResponse;
}

export namespace TemperatureStreamResponse {
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

export class GetTermsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTermsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTermsRequest): GetTermsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTermsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTermsRequest;
  static deserializeBinaryFromReader(message: GetTermsRequest, reader: jspb.BinaryReader): GetTermsRequest;
}

export namespace GetTermsRequest {
  export type AsObject = {
  }
}

export class GetTermsResponse extends jspb.Message {
  getP(): number;
  setP(value: number): void;

  getD(): number;
  setD(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTermsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTermsResponse): GetTermsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTermsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTermsResponse;
  static deserializeBinaryFromReader(message: GetTermsResponse, reader: jspb.BinaryReader): GetTermsResponse;
}

export namespace GetTermsResponse {
  export type AsObject = {
    p: number,
    d: number,
  }
}

export class SetTermsRequest extends jspb.Message {
  getP(): number;
  setP(value: number): void;

  getD(): number;
  setD(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetTermsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetTermsRequest): SetTermsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetTermsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetTermsRequest;
  static deserializeBinaryFromReader(message: SetTermsRequest, reader: jspb.BinaryReader): SetTermsRequest;
}

export namespace SetTermsRequest {
  export type AsObject = {
    p: number,
    d: number,
  }
}

export class SetTermsResponse extends jspb.Message {
  getP(): number;
  setP(value: number): void;

  getD(): number;
  setD(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetTermsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetTermsResponse): SetTermsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetTermsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetTermsResponse;
  static deserializeBinaryFromReader(message: SetTermsResponse, reader: jspb.BinaryReader): SetTermsResponse;
}

export namespace SetTermsResponse {
  export type AsObject = {
    p: number,
    d: number,
  }
}

