import {
  ActionCreatorWithPayload,
  createSlice,
  Dispatch,
  PayloadAction,
} from "@reduxjs/toolkit";
import { Message } from "google-protobuf";
import {
  GetCurrentTemperatureRequest,
  GetCurrentTemperatureResponse,
  GetTargetTemperatureRequest,
  GetTargetTemperatureResponse,
  SetTargetTemperatureRequest,
  SetTargetTemperatureResponse,
} from "../proto/pkg/appliancepb/appliance_pb";
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

//
// Current temperature slice
// -------------------------
export const curTempSlice = createSlice({
  name: "curTemp",
  initialState: { curTemp: undefined, isFetching: false } as {
    curTemp?: number;
    isFetching: boolean;
  },
  reducers: {
    // GetCurrentTemperature
    getCurrentTemperatureRequest: (
      state,
      action: PayloadAction<GetCurrentTemperatureRequest>
    ) => {
      state = { ...state, isFetching: true };
    },
    getCurrentTemperatureResponse: (
      state,
      action: PayloadAction<GetCurrentTemperatureResponse>
    ) => {
      state = { curTemp: action.payload.getTemperature(), isFetching: false };
    },
    getCurrentTemperatureFailure: (
      state,
      action: PayloadAction<{
        req: GetCurrentTemperatureRequest;
        err: ServiceError;
      }>
    ) => {
      state = { curTemp: undefined, isFetching: false };
    },
  },
});

//
// Target temperature slice
// -------------------------
export const targetTempSlice = createSlice({
  name: "targetTemp",
  initialState: { targetTemp: undefined, isFetching: false } as {
    targetTemp?: number;
    isFetching: boolean;
  },
  reducers: {
    // GetTargetTemperature
    getTargetTemperatureRequest: (
      state,
      action: PayloadAction<GetTargetTemperatureRequest>
    ) => {
      state = { ...state, isFetching: true };
    },
    getTargetTemperatureResponse: (
      state,
      action: PayloadAction<GetTargetTemperatureResponse>
    ) => {
      state = {
        targetTemp: action.payload.getTemperature(),
        isFetching: false,
      };
    },
    getTargetTemperatureFailure: (
      state,
      action: PayloadAction<{
        req: GetTargetTemperatureRequest;
        err: ServiceError;
      }>
    ) => {
      state = { targetTemp: undefined, isFetching: false };
    },

    // SetTargetTemperature
    setTargetTemperatureRequest: (
      state,
      action: PayloadAction<SetTargetTemperatureRequest>
    ) => {
      state = { ...state, isFetching: true };
    },
    setTargetTemperatureResponse: (
      state,
      action: PayloadAction<SetTargetTemperatureResponse>
    ) => {
      state = {
        targetTemp: action.payload.getTemperature(),
        isFetching: false,
      };
    },
    setTargetTemperatureFailure: (
      state,
      action: PayloadAction<{
        req: SetTargetTemperatureRequest;
        err: ServiceError;
      }>
    ) => {
      state = { ...state, isFetching: false };
    },
  },
});
