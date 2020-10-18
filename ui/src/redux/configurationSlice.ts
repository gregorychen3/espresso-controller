import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";
import { State } from ".";
import { createUnaryGrpcThunk } from "../createUnaryGrpcThunk";
import { Espresso } from "../proto/pkg/espressopb/espresso_pb_service";

//
// THUNKS
// ------

export const getConfiguration = createUnaryGrpcThunk(Espresso.GetConfiguration);
export const setConfiguration = createUnaryGrpcThunk(Espresso.SetConfiguration);

//
// SLICE
// -----

interface ConfigurationSlice {
  configuration?: {
    targetTemp: { value: number; setAt: moment.Moment };
    p: number;
    d: number;
  };
  isFetching: boolean;
}

const initialState: ConfigurationSlice = {
  isFetching: false,
};

export const configurationSlice = createSlice({
  name: "configuration",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // GetConfiguration
    builder.addCase(getConfiguration.pending, (state) => {
      state.isFetching = true;
    });
    builder.addCase(getConfiguration.rejected, (state) => {
      state.isFetching = false;
    });
    builder.addCase(getConfiguration.fulfilled, (state, action) => {
      state.isFetching = false;
      const value = action.payload.getTemperature();
      const setAt = action.payload.getSetAt()?.toDate();
      if (!setAt) {
        console.warn("Target temperature response missing setAt time");
        return;
      }
      state.configuration = {
        targetTemp: { value, setAt: moment(setAt) },
        p: action.payload.getP(),
        d: action.payload.getD(),
      };
    });

    // SetConfiguration
    builder.addCase(setConfiguration.pending, (state) => {
      state.isFetching = true;
    });
    builder.addCase(setConfiguration.rejected, (state) => {
      state.isFetching = false;
    });
    builder.addCase(setConfiguration.fulfilled, (state, action) => {
      state.isFetching = false;
      const value = action.payload.getTemperature();
      const setAt = action.payload.getSetAt()?.toDate();
      if (!setAt) {
        console.warn("Target temperature response missing setAt time");
        return;
      }
      state.configuration = {
        targetTemp: { value, setAt: moment(setAt) },
        p: action.payload.getP(),
        d: action.payload.getD(),
      };
    });
  },
});

//
// SELECTORS
// ---------

export const selectConfiguration = (state: State) => state.configuration.configuration;
export const selectFetchingTargetTemp = (state: State) => state.configuration.isFetching;
