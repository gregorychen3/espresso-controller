import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { targetTempSlice } from "./targetTempSlice";

export const uiSlice = createSlice({
  name: "ui",
  initialState: { targetTempModalVisibility: false },
  reducers: {
    setTargetTempModalVisibility: (state, action: PayloadAction<boolean>) => {
      state.targetTempModalVisibility = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      targetTempSlice.actions.setTargetTemperatureResponse,
      (state, action) => {
        state.targetTempModalVisibility = false;
      }
    );
  },
});

export const { setTargetTempModalVisibility } = uiSlice.actions;
