import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import {
  GetTargetTemperatureRequest,
  GetTargetTemperatureResponse,
  SetTargetTemperatureRequest,
  SetTargetTemperatureResponse,
} from "../proto/pkg/appliancepb/appliance_pb";
import { ServiceError } from "../proto/pkg/appliancepb/appliance_pb_service";
import { applianceClient, createUnaryGrpcThunk } from "./helpers";

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
