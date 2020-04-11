import { ActionCreatorWithPayload, Dispatch } from "@reduxjs/toolkit";
import { Message } from "google-protobuf";
import { toast } from "react-toastify";
import {
  ApplianceClient,
  ServiceError,
} from "../proto/pkg/appliancepb/appliance_pb_service";

export const applianceClient = new ApplianceClient("");

// Interface grouping together the action creators for an async unary grpc
interface UnaryGrpcActionCreators {
  request: ActionCreatorWithPayload<Message, string>;
  response: ActionCreatorWithPayload<Message, string>;
  failure: ActionCreatorWithPayload<
    {
      req: Message; // failure action payload includes the original request msg
      err: ServiceError;
    },
    string
  >;
}

export const createUnaryGrpcThunk = (
  apiCall: (...args: any[]) => any,
  requestMsg: Message,
  actionCreators: UnaryGrpcActionCreators,
  dispatch: Dispatch
) => {
  const { request, response, failure } = actionCreators;
  dispatch(request(requestMsg));
  apiCall.bind(applianceClient)(
    requestMsg,
    (err: ServiceError, responseMsg: Message) => {
      if (err) {
        console.error(err);
        dispatch(failure({ req: requestMsg, err }));
        toast.error(`Error: ${err.message}`);
      } else {
        dispatch(response(responseMsg));
      }
    }
  );
};
