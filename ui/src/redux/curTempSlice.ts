import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import moment from "moment";
import {
  GetCurrentTemperatureRequest,
  GetCurrentTemperatureResponse,
} from "../proto/pkg/appliancepb/appliance_pb";
import { ServiceError } from "../proto/pkg/appliancepb/appliance_pb_service";
import { applianceClient, createUnaryGrpcThunk } from "./helpers";

interface TemperatureSample {
  temperature: number;
  observedAt: moment.Moment;
}

export const curTempSlice = createSlice({
  name: "curTemp",
  initialState: { tempHistory: [], isFetching: false } as {
    tempHistory: TemperatureSample[];
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
      const sample = action.payload.getSample();
      if (!sample) {
        return;
      }

      const observedAt = sample.getObservedAt();
      if (!observedAt) {
        return;
      }

      state.tempHistory.push({
        temperature: sample.getValue(),
        observedAt: moment(observedAt.toDate()),
      });
      state.isFetching = false;
    },
    getCurrentTemperatureFailure: (
      state,
      action: PayloadAction<{
        req: GetCurrentTemperatureRequest;
        err: ServiceError;
      }>
    ) => {
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
