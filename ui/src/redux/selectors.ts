import { State } from ".";
import _ from "lodash";

export const getCurTemp = (state: State) =>
  _.last(state.curTempSlice.temperatureHistory);
export const getTempHistory = (state: State) =>
  state.curTempSlice.temperatureHistory;
export const isFetchingCurTemp = (state: State) =>
  state.curTempSlice.isFetching;

export const getTargetTemp = (state: State) => state.targetTempSlice.targetTemp;
export const isFetchingTargetTemp = (state: State) =>
  state.targetTempSlice.isFetching;
export const isSettingTargetTemp = (state: State) =>
  state.targetTempSlice.isSetting;

export const showTargetTempModal = (state: State) =>
  state.uiSlice.targetTempModalVisibility;
