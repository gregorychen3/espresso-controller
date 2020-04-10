import { combineReducers } from "@reduxjs/toolkit";
import { curTempSlice, targetTempSlice } from "./reducers";

const rootReducer = combineReducers({
  curTempSlice: curTempSlice.reducer,
  targetTempSlice: targetTempSlice.reducer,
});

export default rootReducer;
export type State = ReturnType<typeof rootReducer>;
