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
  targetTemp?: { value: number; setAt: moment.Moment };
  p?: number;
  d?: number;
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
    builder.addCase(getConfiguration.fulfilled, (state, action) => {
      const value = action.payload.getTemperature();
      const setAt = action.payload.getSetAt()?.toDate();
      if (!setAt) {
        console.warn("Target temperature response missing setAt time");
        state.isFetching = false;
        return;
      }
      state.targetTemp = { value, setAt: moment(setAt) };
      state.isFetching = false;
    });
    builder.addCase(getConfiguration.rejected, (state) => {
      state.targetTemp = undefined;
      state.isFetching = false;
    });

    // SetConfiguration
    builder.addCase(setConfiguration.pending, (state) => {
      state.isFetching = true;
    });
    builder.addCase(setConfiguration.fulfilled, (state, action) => {
      const value = action.payload.getTemperature();
      const setAt = action.payload.getSetAt()?.toDate();
      if (!setAt) {
        console.warn("Target temperature response missing setAt time");
        state.isFetching = false;
        return;
      }

      state.targetTemp = { value, setAt: moment(setAt) };
      state.isFetching = false;
    });
    builder.addCase(setConfiguration.rejected, (state) => {
      state.isFetching = false;
    });
  },
});

//
// SELECTORS
// ---------

export const getTargetTemp = (state: State) => state.configuration.targetTemp;
export const isFetchingTargetTemp = (state: State) => state.configuration.isFetching;
