import { ActionCreatorWithPayload, Dispatch } from "@reduxjs/toolkit";
import { Message } from "google-protobuf";
import { toast } from "react-toastify";
import {
  ApplianceClient,
  ServiceError,
} from "../proto/pkg/appliancepb/appliance_pb_service";

export const applianceClient = new ApplianceClient("");

/**
 * Creates a thunk action for a unary grpc with request jspb.Message of type T1
 * and response jspb.Message of type T2.
 */
export const createUnaryGrpcThunk = <T1 extends Message, T2 extends Message>(
  apiCall: (...args: any[]) => any,
  requestMsg: T1,
  actionCreators: {
    request: ActionCreatorWithPayload<T1, string>;
    response: ActionCreatorWithPayload<T2, string>;
    failure: ActionCreatorWithPayload<
      {
        req: T1; // failure action payload includes the original request msg
        err: ServiceError;
      },
      string
    >;
  },
  dispatch: Dispatch
) => {
  const { request, response, failure } = actionCreators;
  dispatch(request(requestMsg));
  apiCall.bind(applianceClient)(
    requestMsg,
    (err: ServiceError, responseMsg: T2) => {
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
