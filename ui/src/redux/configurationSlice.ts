import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { RootState } from ".";
import { createUnaryGrpcThunk } from "../createUnaryGrpcThunk";
import { Espresso } from "../proto/pkg/espressopb/espresso_pb_service";

//
// THUNKS
// ------

export const getPIDConfig = createUnaryGrpcThunk(Espresso.GetPIDConfig);
export const setPIDConfig = createUnaryGrpcThunk(Espresso.SetPIDConfig);

//
// SLICE
// -----

interface PIDConfigSlice {
  pidConfig?: {
    targetTemp: { value: number; setAt: Date };
    p: number;
    i: number;
    d: number;
  };
  isFetching: boolean;
}

const initialState: PIDConfigSlice = {
  isFetching: false,
};

const configurationSlice = createSlice({
  name: "configuration",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // GetConfiguration
    builder.addCase(getPIDConfig.pending, (state) => {
      state.isFetching = true;
    });
    builder.addCase(getPIDConfig.rejected, (state) => {
      state.isFetching = false;
    });
    builder.addCase(getPIDConfig.fulfilled, (state, action) => {
      state.isFetching = false;
      const value = action.payload.getTemperature();
      const setAt = action.payload.getSetAt()?.toDate();
      if (!setAt) {
        console.warn("Target temperature response missing setAt time");
        return;
      }
      state.pidConfig = {
        targetTemp: { value, setAt },
        p: action.payload.getP(),
        i: action.payload.getI(),
        d: action.payload.getD(),
      };
    });

    // SetConfiguration
    builder.addCase(setPIDConfig.pending, (state) => {
      state.isFetching = true;
    });
    builder.addCase(setPIDConfig.rejected, (state) => {
      state.isFetching = false;
    });
    builder.addCase(setPIDConfig.fulfilled, (state, action) => {
      state.isFetching = false;
      const value = action.payload.getTemperature();
      const setAt = action.payload.getSetAt()?.toDate();
      if (!setAt) {
        console.warn("Target temperature response missing setAt time");
        return;
      }
      state.pidConfig = {
        targetTemp: { value, setAt },
        p: action.payload.getP(),
        i: action.payload.getI(),
        d: action.payload.getD(),
      };
      toast.success("PID successfully configured");
    });
  },
});

export default configurationSlice.reducer;

//
// SELECTORS
// ---------

export const selectPIDConfig = (state: RootState) => state.configuration.pidConfig;
export const selectFetchingTargetTemp = (state: RootState) => state.configuration.isFetching;
