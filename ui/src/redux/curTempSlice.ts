import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import {
  GetCurrentTemperatureRequest,
  GetCurrentTemperatureResponse,
} from "../proto/pkg/appliancepb/appliance_pb";
import { ServiceError } from "../proto/pkg/appliancepb/appliance_pb_service";
import { applianceClient, createUnaryGrpcThunk } from "./helpers";

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
