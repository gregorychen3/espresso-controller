import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
  name: "ui",
  initialState: { targetTempModalVisibility: false },
  reducers: {
    setTargetTempModalVisibility: (state, action: PayloadAction<boolean>) => {
      state.targetTempModalVisibility = action.payload;
    },
  },
});

export const { setTargetTempModalVisibility } = uiSlice.actions;
