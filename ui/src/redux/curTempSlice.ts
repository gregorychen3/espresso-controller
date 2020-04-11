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
      state.isFetching = true;
    },
    getCurrentTemperatureResponse: (
      state,
      action: PayloadAction<GetCurrentTemperatureResponse>
    ) => {
      state.curTemp = action.payload.getTemperature();
      state.isFetching = false;
    },
    getCurrentTemperatureFailure: (
      state,
      action: PayloadAction<{
        req: GetCurrentTemperatureRequest;
        err: ServiceError;
      }>
    ) => {
      state.curTemp = undefined;
      state.isFetching = false;
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
      request: curTempSlice.actions.getCurrentTemperatureRequest,
      response: curTempSlice.actions.getCurrentTemperatureResponse,
      failure: curTempSlice.actions.getCurrentTemperatureFailure,
    },
    dispatch
  );
