import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { targetTemperatureSlice } from "./slices/targetTemperatureSlice";

export const uiSlice = createSlice({
  name: "ui",
  initialState: { targetTempModalVisibility: false },
  reducers: {
    setTargetTempModalVisibility: (state, action: PayloadAction<boolean>) => {
      state.targetTempModalVisibility = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(targetTemperatureSlice.actions.setTargetTemperatureResponse, (state, action) => {
      state.targetTempModalVisibility = false;
    });
  },
});

export const { setTargetTempModalVisibility } = uiSlice.actions;
