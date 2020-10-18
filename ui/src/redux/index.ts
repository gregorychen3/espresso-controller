import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { boilerTemperatureSlice } from "./boilerTemperatureSlice";
import { configurationSlice } from "./configurationSlice";
import { uiSlice } from "./uiSlice";

export const store = configureStore({
  reducer: {
    boilerTemperature: boilerTemperatureSlice.reducer,
    configuration: configurationSlice.reducer,
    ui: uiSlice.reducer,
  },
  middleware: getDefaultMiddleware({
    thunk: true,
    immutableCheck: true,
    serializableCheck: false,
  }),
});

export type RootState = ReturnType<typeof store.getState>;
