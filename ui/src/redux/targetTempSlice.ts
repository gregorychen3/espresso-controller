import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import moment from "moment";
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
    targetTemp?: { value: number; setAt: moment.Moment };
    isFetching: boolean;
    isSetting: boolean;
  },
  reducers: {
    // GetTargetTemperature
    getTargetTemperatureRequest: (
      state,
      action: PayloadAction<GetTargetTemperatureRequest>
    ) => {
      state.isFetching = true;
    },
    getTargetTemperatureResponse: (
      state,
      action: PayloadAction<GetTargetTemperatureResponse>
    ) => {
      const value = action.payload.getTemperature();
      const setAt = action.payload.getSetAt()?.toDate();
      if (!setAt) {
        console.log("Target temperature response missing setAt time");
        return;
      }

      state.targetTemp = { value, setAt: moment(setAt) };
      state.isFetching = false;
    },
    getTargetTemperatureFailure: (
      state,
      action: PayloadAction<{
        req: GetTargetTemperatureRequest;
        err: ServiceError;
      }>
    ) => {
      state.targetTemp = undefined;
      state.isFetching = false;
    },

    // SetTargetTemperature
    setTargetTemperatureRequest: (
      state,
      action: PayloadAction<SetTargetTemperatureRequest>
    ) => {
      state.isSetting = true;
    },
    setTargetTemperatureResponse: (
      state,
      action: PayloadAction<SetTargetTemperatureResponse>
    ) => {
      const value = action.payload.getTemperature();
      const setAt = action.payload.getSetAt()?.toDate();
      if (!setAt) {
        console.log("Target temperature response missing setAt time");
        return;
      }

      state.targetTemp = { value, setAt: moment(setAt) };
      state.isSetting = false;
    },
    setTargetTemperatureFailure: (
      state,
      action: PayloadAction<{
        req: SetTargetTemperatureRequest;
        err: ServiceError;
      }>
    ) => {
      state.isSetting = false;
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
      request: targetTempSlice.actions.getTargetTemperatureRequest,
      response: targetTempSlice.actions.getTargetTemperatureResponse,
      failure: targetTempSlice.actions.getTargetTemperatureFailure,
    },
    dispatch
  );

export const setTargetTemperature = (req: SetTargetTemperatureRequest) => (
  dispatch: Dispatch
) =>
  createUnaryGrpcThunk(
    applianceClient.setTargetTemperature,
    req,
    {
      request: targetTempSlice.actions.setTargetTemperatureRequest,
      response: targetTempSlice.actions.setTargetTemperatureResponse,
      failure: targetTempSlice.actions.setTargetTemperatureFailure,
    },
    dispatch
  );
