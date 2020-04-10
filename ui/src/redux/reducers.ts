import {
  ActionCreatorWithPayload,
  createSlice,
  Dispatch,
  PayloadAction,
} from "@reduxjs/toolkit";
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

const createUnaryGrpcThunk = (
  apiCall: (...args: any[]) => any,
  reqMsg: any,
  actionCreators: UnaryGrpcActionCreators,
  dispatch: Dispatch
) => {
  const { req, resp, failure } = actionCreators;

  dispatch(req(reqMsg));
  apiCall(reqMsg, (err: ServiceError, respMsg: any) => {
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
export const getCurrentTemperature = (req: GetCurrentTemperatureRequest) => (
  dispatch: Dispatch
) =>
  createUnaryGrpcThunk(
    applianceClient.getCurrentTemperature,
    req,
    {
      req: curTempSlice.actions.getCurrentTemperatureRequest,
      resp: curTempSlice.actions.getCurrentTemperatureResponse,
      failure: curTempSlice.actions.getCurrentTemperatureFailure,
    },
    dispatch
  );

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
export const getTargetTemperature = (req: GetTargetTemperatureRequest) => (
  dispatch: Dispatch
) =>
  createUnaryGrpcThunk(
    applianceClient.getTargetTemperature,
    req,
    {
      req: targetTempSlice.actions.getTargetTemperatureRequest,
      resp: targetTempSlice.actions.getTargetTemperatureResponse,
      failure: targetTempSlice.actions.getTargetTemperatureFailure,
    },
    dispatch
  );

export const setTargetTemperature = (req: GetTargetTemperatureRequest) => (
  dispatch: Dispatch
) =>
  createUnaryGrpcThunk(
    applianceClient.setTargetTemperature,
    req,
    {
      req: targetTempSlice.actions.setTargetTemperatureRequest,
      resp: targetTempSlice.actions.setTargetTemperatureResponse,
      failure: targetTempSlice.actions.setTargetTemperatureFailure,
    },
    dispatch
  );
