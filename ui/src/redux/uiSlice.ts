import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setConfiguration } from "./slices/configurationSlice";

export const uiSlice = createSlice({
  name: "ui",
  initialState: { targetTempModalVisibility: false },
  reducers: {
    setTargetTempModalVisibility: (state, action: PayloadAction<boolean>) => {
      state.targetTempModalVisibility = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setConfiguration.fulfilled, (state) => {
      state.targetTempModalVisibility = false;
    });
  },
});

export const { setTargetTempModalVisibility } = uiSlice.actions;
