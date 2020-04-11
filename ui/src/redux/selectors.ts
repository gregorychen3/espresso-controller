import { State } from ".";
import _ from "lodash";

export const getCurTemp = (state: State) =>
  _.last(state.temperatureSlice.temperatureHistory);
export const getTempHistory = (state: State) =>
  state.temperatureSlice.temperatureHistory;
export const isFetchingCurTemp = (state: State) =>
  state.temperatureSlice.isFetching;

export const getTargetTemp = (state: State) =>
  state.targetTemperatureSlice.targetTemp;
export const isFetchingTargetTemp = (state: State) =>
  state.targetTemperatureSlice.isFetching;
export const isSettingTargetTemp = (state: State) =>
  state.targetTemperatureSlice.isSetting;

export const showTargetTempModal = (state: State) =>
  state.uiSlice.targetTempModalVisibility;
