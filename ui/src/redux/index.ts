import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { boilerTemperatureSlice } from "./slices/boilerTemperatureSlice";
import { targetTemperatureSlice } from "./slices/targetTemperatureSlice";
import { uiSlice } from "./uiSlice";

const rootReducer = combineReducers({
  boilerTemperatureSlice: boilerTemperatureSlice.reducer,
  targetTemperatureSlice: targetTemperatureSlice.reducer,
  uiSlice: uiSlice.reducer,
});

export default rootReducer;

export type State = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
});
