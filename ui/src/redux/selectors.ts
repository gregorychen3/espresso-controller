import { State } from ".";

export const getCurTemp = (state: State) =>
  state.boilerTemperatureSlice.history[
    state.boilerTemperatureSlice.history.length - 1
  ];
export const getTempHistory = (state: State) =>
  state.boilerTemperatureSlice.history;

export const getTargetTemp = (state: State) =>
  state.targetTemperatureSlice.targetTemp;
export const isFetchingTargetTemp = (state: State) =>
  state.targetTemperatureSlice.isFetching;
export const isSettingTargetTemp = (state: State) =>
  state.targetTemperatureSlice.isSetting;

export const showTargetTempModal = (state: State) =>
  state.uiSlice.targetTempModalVisibility;
