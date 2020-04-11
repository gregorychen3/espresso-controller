import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { curTempSlice } from "./curTempSlice";
import { targetTempSlice } from "./targetTempSlice";

const rootReducer = combineReducers({
  curTempSlice: curTempSlice.reducer,
  targetTempSlice: targetTempSlice.reducer,
});

export default rootReducer;

export type State = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
});
