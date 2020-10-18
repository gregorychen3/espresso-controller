import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import boilerTemperatureReducer from "./boilerTemperatureSlice";
import configurationReducer from "./configurationSlice";
import { uiSlice } from "./uiSlice";

export const store = configureStore({
  reducer: {
    boilerTemperature: boilerTemperatureReducer,
    configuration: configurationReducer,
    ui: uiSlice.reducer,
  },
  middleware: getDefaultMiddleware({
    thunk: true,
    immutableCheck: true,
    serializableCheck: false,
  }),
});

export type RootState = ReturnType<typeof store.getState>;
