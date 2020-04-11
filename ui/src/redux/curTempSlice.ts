import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import moment from "moment";
import {
  GetCurrentTemperatureRequest,
  GetCurrentTemperatureResponse,
  GetTemperatureHistoryRequest,
  GetTemperatureHistoryResponse,
} from "../proto/pkg/appliancepb/appliance_pb";
import { ServiceError } from "../proto/pkg/appliancepb/appliance_pb_service";
import { TemperatureSample } from "../types";
import { applianceClient, createUnaryGrpcThunk } from "./helpers";

export const curTempSlice = createSlice({
  name: "curTemp",
  initialState: { temperatureHistory: [], isFetching: false } as {
    temperatureHistory: TemperatureSample[];
    isFetching: boolean;
  },
  reducers: {
    // GetTemperatureHistory
    getTemperatureHistoryRequest: (
      state,
      action: PayloadAction<GetTemperatureHistoryRequest>
    ) => {
      state.isFetching = true;
    },
    getTemperatureHistoryResponse: (
      state,
      action: PayloadAction<GetTemperatureHistoryResponse>
    ) => {
      const temperatureHistory = action.payload
        .getSamplesList()
        .reduce((acc: TemperatureSample[], curSample) => {
          const observedAt = curSample.getObservedAt();
          return observedAt
            ? [
                ...acc,
                {
                  value: curSample.getValue(),
                  observedAt: moment(observedAt.toDate()),
                },
              ]
            : acc;
        }, [])
        .filter((s) => s !== null);

      state.temperatureHistory = temperatureHistory;
      state.isFetching = false;
    },
    getTemperatureHistoryFailure: (
      state,
      action: PayloadAction<{
        req: GetTemperatureHistoryRequest;
        err: ServiceError;
      }>
    ) => {
      state.isFetching = false;
    },

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

      state.temperatureHistory.push({
        value: sample.getValue(),
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
