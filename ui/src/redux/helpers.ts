import { ActionCreatorWithPayload, Dispatch } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  ApplianceClient,
  ServiceError,
} from "../proto/pkg/appliancepb/appliance_pb_service";

export const applianceClient = new ApplianceClient("");

// Interface grouping together the actions creators for an async unary grpc
export interface UnaryGrpcActionCreators {
  req: ActionCreatorWithPayload<any, string>;
  resp: ActionCreatorWithPayload<any, string>;
  failure: ActionCreatorWithPayload<
    {
      req: any; // the original request message
      err: ServiceError;
    },
    string
  >;
}

export const createUnaryGrpcThunk = (
  apiCall: (...args: any[]) => any,
  reqMsg: any,
  actionCreators: UnaryGrpcActionCreators,
  dispatch: Dispatch
) => {
  const { req, resp, failure } = actionCreators;

  dispatch(req(reqMsg));
  apiCall.bind(applianceClient)(reqMsg, (err: ServiceError, respMsg: any) => {
    if (err) {
      console.error(err);
      dispatch(failure({ req: reqMsg, err }));
      toast.error(`Error: ${err.message}`);
    } else {
      dispatch(resp(respMsg));
    }
  });
};
