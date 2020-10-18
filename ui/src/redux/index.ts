import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { boilerTemperatureSlice } from "./boilerTemperatureSlice";
import { configurationSlice } from "./configurationSlice";
import { uiSlice } from "./uiSlice";

const rootReducer = combineReducers({
  boilerTemperature: boilerTemperatureSlice.reducer,
  configuration: configurationSlice.reducer,
  ui: uiSlice.reducer,
});

export default rootReducer;

export type State = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
});
