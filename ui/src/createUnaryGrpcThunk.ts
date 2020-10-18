import { grpc } from "@improbable-eng/grpc-web";
import { createAsyncThunk } from "@reduxjs/toolkit";
import * as jspb from "google-protobuf";
import { toast } from "react-toastify";
import { RootState } from "./redux";

export const createUnaryGrpcThunk = <TReq extends jspb.Message, TResp extends jspb.Message>(
  method: grpc.UnaryMethodDefinition<TReq, TResp>
) => {
  const { methodName } = method;
  interface Payload {
    request: TReq;
  }

  return createAsyncThunk<TResp, Payload, { state: RootState }>(
    methodName,
    async ({ request }: Payload) =>
      new Promise<TResp>((resolve, reject) => {
        grpc.invoke<TReq, TResp, typeof method>(method, {
          host: "",
          request,
          onEnd: (code: grpc.Code, message: string, trailers: grpc.Metadata) => {
            if (code !== grpc.Code.OK) {
              toast.error(`Error: ${methodName}: ${message}`);
              reject({ message, code, metadata: trailers });
            }
          },
          onMessage: (resp: TResp) => {
            resolve(resp.clone()); // clone msg on arrival to ensure all fields are set, avoiding unintended msg mutation later
          },
        });
      })
  );
};
