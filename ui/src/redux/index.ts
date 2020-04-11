import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { temperatureSlice } from "./temperatureSlice";
import { targetTemperatureSlice } from "./targetTemperatureSlice";
import { uiSlice } from "./uiSlice";

const rootReducer = combineReducers({
  temperatureSlice: temperatureSlice.reducer,
  targetTemperatureSlice: targetTemperatureSlice.reducer,
  uiSlice: uiSlice.reducer,
});

export default rootReducer;

export type State = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
});
