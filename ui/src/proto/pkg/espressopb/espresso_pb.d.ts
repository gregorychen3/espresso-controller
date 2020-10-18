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

export class GetConfigurationRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetConfigurationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetConfigurationRequest): GetConfigurationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetConfigurationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetConfigurationRequest;
  static deserializeBinaryFromReader(message: GetConfigurationRequest, reader: jspb.BinaryReader): GetConfigurationRequest;
}

export namespace GetConfigurationRequest {
  export type AsObject = {
  }
}

export class Configuration extends jspb.Message {
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
  toObject(includeInstance?: boolean): Configuration.AsObject;
  static toObject(includeInstance: boolean, msg: Configuration): Configuration.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Configuration, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Configuration;
  static deserializeBinaryFromReader(message: Configuration, reader: jspb.BinaryReader): Configuration;
}

export namespace Configuration {
  export type AsObject = {
    temperature: number,
    p: number,
    i: number,
    d: number,
    setAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

