import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import moment from "moment";
import {
  GetCurrentBoilerTemperatureRequest,
  GetCurrentBoilerTemperatureResponse,
  GetBoilerTemperatureHistoryRequest,
  GetBoilerTemperatureHistoryResponse,
} from "../../proto/pkg/appliancepb/appliance_pb";
import { ServiceError } from "../../proto/pkg/appliancepb/appliance_pb_service";
import { TemperatureSample } from "../../types";
import { applianceClient, createUnaryGrpcThunk } from "../helpers";

export const temperatureSlice = createSlice({
  name: "temperature",
  initialState: { temperatureHistory: [], isFetching: false } as {
    temperatureHistory: TemperatureSample[];
    isFetching: boolean;
  },
  reducers: {
    // GetBoilerTemperatureHistory
    getBoilerTemperatureHistoryRequest: (
      state,
      action: PayloadAction<GetBoilerTemperatureHistoryRequest>
    ) => {
      state.isFetching = true;
    },
    getBoilerTemperatureHistoryResponse: (
      state,
      action: PayloadAction<GetBoilerTemperatureHistoryResponse>
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
    getBoilerTemperatureHistoryFailure: (
      state,
      action: PayloadAction<{
        req: GetBoilerTemperatureHistoryRequest;
        err: ServiceError;
      }>
    ) => {
      state.isFetching = false;
    },

    // GetCurrentBoilerTemperature
    getCurrentBoilerTemperatureRequest: (
      state,
      action: PayloadAction<GetCurrentBoilerTemperatureRequest>
    ) => {
      state.isFetching = true;
    },
    getCurrentBoilerTemperatureResponse: (
      state,
      action: PayloadAction<GetCurrentBoilerTemperatureResponse>
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
    getCurrentBoilerTemperatureFailure: (
      state,
      action: PayloadAction<{
        req: GetCurrentBoilerTemperatureRequest;
        err: ServiceError;
      }>
    ) => {
      state.isFetching = false;
    },
  },
});

export const getCurrentBoilerTemperature = (
  req: GetCurrentBoilerTemperatureRequest
) => (dispatch: Dispatch) =>
  createUnaryGrpcThunk(
    applianceClient.getCurrentBoilerTemperature,
    req,
    {
      request: temperatureSlice.actions.getCurrentBoilerTemperatureRequest,
      response: temperatureSlice.actions.getCurrentBoilerTemperatureResponse,
      failure: temperatureSlice.actions.getCurrentBoilerTemperatureFailure,
    },
    dispatch
  );

export const getBoilerTemperatureHistory = (
  req: GetBoilerTemperatureHistoryRequest
) => (dispatch: Dispatch) =>
  createUnaryGrpcThunk(
    applianceClient.getBoilerTemperatureHistory,
    req,
    {
      request: temperatureSlice.actions.getBoilerTemperatureHistoryRequest,
      response: temperatureSlice.actions.getBoilerTemperatureHistoryResponse,
      failure: temperatureSlice.actions.getBoilerTemperatureHistoryFailure,
    },
    dispatch
  );
