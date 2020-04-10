import { ActionCreatorWithPayload, Dispatch } from "@reduxjs/toolkit";
import { Message } from "google-protobuf";
import {
  ApplianceClient,
  ServiceError,
} from "../proto/pkg/appliancepb/appliance_pb_service";

const applianceClient = new ApplianceClient("");

// Interface grouping together the actions creators for an async unary grpc
interface UnaryGrpcActionCreators {
  req: ActionCreatorWithPayload<Message, string>;
  resp: ActionCreatorWithPayload<Message, string>;
  failure: ActionCreatorWithPayload<
    {
      req: Message; // the original request message
      err: ServiceError;
    },
    string
  >;
}

const createUnaryGrpcThunk = (
  apiCall: (...args: any[]) => any,
  reqMsg: Message,
  actionCreators: UnaryGrpcActionCreators,
  dispatch: Dispatch
) => {
  const { req, resp, failure } = actionCreators;

  dispatch(req(reqMsg));
  apiCall(reqMsg, (err: ServiceError, respMsg: Message) => {
    if (err) {
      console.error(err);
      dispatch(failure({ req: reqMsg, err }));
      // toast.error(`Error: ${err.message}`);
    } else {
      dispatch(resp(respMsg));
    }
  });
};
