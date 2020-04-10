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
  initialState: {
    targetTemp: undefined,
    isFetching: false,
    isSetting: false,
  } as {
    targetTemp?: number;
    isFetching: boolean;
    isSetting: boolean;
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
        ...state,
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
      state = {
        ...state,
        targetTemp: undefined,
        isFetching: false,
      };
    },

    // SetTargetTemperature
    setTargetTemperatureRequest: (
      state,
      action: PayloadAction<SetTargetTemperatureRequest>
    ) => {
      state = { ...state, isSetting: true };
    },
    setTargetTemperatureResponse: (
      state,
      action: PayloadAction<SetTargetTemperatureResponse>
    ) => {
      state = {
        ...state,
        targetTemp: action.payload.getTemperature(),
        isSetting: false,
      };
    },
    setTargetTemperatureFailure: (
      state,
      action: PayloadAction<{
        req: SetTargetTemperatureRequest;
        err: ServiceError;
      }>
    ) => {
      state = { ...state, isSetting: false };
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
