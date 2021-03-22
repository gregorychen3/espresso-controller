import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setPIDConfig } from "./configurationSlice";

export const uiSlice = createSlice({
  name: "ui",
  initialState: { configureDialogVisibility: false },
  reducers: {
    setConfigureDialogVisibility: (state, action: PayloadAction<boolean>) => {
      state.configureDialogVisibility = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setPIDConfig.fulfilled, (state) => {
      state.configureDialogVisibility = false;
    });
  },
});

export const { setConfigureDialogVisibility } = uiSlice.actions;
