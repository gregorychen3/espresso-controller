import { State } from ".";

export const getCurTemp = (state: State) => state.curTempSlice.curTemp;
export const isFetchingCurTemp = (state: State) =>
  state.curTempSlice.isFetching;

export const getTargetTemp = (state: State) => state.targetTempSlice.targetTemp;
export const isFetchingTargetTemp = (state: State) =>
  state.targetTempSlice.isFetching;
export const isSettingTargetTemp = (state: State) =>
  state.targetTempSlice.isSetting;
