import { State } from ".";

export const getCurTemp = (state: State) => state.boilerTemperature.history[state.boilerTemperature.history.length - 1];
export const getTempHistory = (state: State) => state.boilerTemperature.history;

export const getTargetTemp = (state: State) => state.configuration.targetTemp;
export const isFetchingTargetTemp = (state: State) => state.configuration.isFetching;

export const showTargetTempModal = (state: State) => state.ui.targetTempModalVisibility;
