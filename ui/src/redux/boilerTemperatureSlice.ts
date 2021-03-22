import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { RootState } from ".";
import { WatchBoilerTemperatureRequest, WatchBoilerTemperatureResponse } from "../proto/pkg/espressopb/espresso_pb";
import { EspressoClient } from "../proto/pkg/espressopb/espresso_pb_service";
import { TemperatureSample } from "../types";

type ReturnType<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer R ? R : never;

const espressoClient = new EspressoClient("");

const maxNumSamples = 900; // 15 minutes of history at a rate of 1 sample/sec

//
// SLICE
// -----

interface BoilerTemperatureSlice {
  stream?: ReturnType<typeof espressoClient.watchBoilerTemperature>;
  history: TemperatureSample[];
}

const initialState: BoilerTemperatureSlice = {
  stream: undefined,
  history: [],
};

const boilerTemperatureSlice = createSlice({
  name: "boilerTemperature",
  initialState,
  reducers: {
    // BoilerTemperature server streaming rpc
    startBoilerTemperatureStream: (
      state,
      action: PayloadAction<ReturnType<typeof espressoClient.watchBoilerTemperature>>
    ) => {
      state.stream = action.payload;
    },
    receiveBoilerTemperatureSample: (state, action: PayloadAction<WatchBoilerTemperatureResponse>) => {
      const msg = action.payload;
      const sample = msg.getSample();
      if (!sample) {
        throw new Error("Failed to process boiler temperature stream message data");
      }

      const observedAt = sample.getObservedAt();
      if (!observedAt) {
        throw new Error("Failed to process boiler temperature stream message data");
      }

      state.history = state.history.slice(-(maxNumSamples - 1));
      state.history.push({
        value: sample.getValue(),
        observedAt: observedAt.toDate(),
      });
    },
    endBoilerTemperatureStream: (state) => {
      state.stream?.cancel();
      state.stream = undefined;
    },
  },
});

export default boilerTemperatureSlice.reducer;

export const watchBoilerTemperature = (req: WatchBoilerTemperatureRequest) => (d: Dispatch) => {
  const stream = espressoClient.watchBoilerTemperature(req);
  d(boilerTemperatureSlice.actions.startBoilerTemperatureStream(stream));

  stream.on("data", (msg) => {
    try {
      d(boilerTemperatureSlice.actions.receiveBoilerTemperatureSample(msg));
    } catch (e) {
      toast.error(`Error: ${e.message}`);
    }
  });
  stream.on("end", (status) => {
    toast.error(`Error: boiler temperature stream ended: ${JSON.stringify(status, null, 2)}`);
  });
};

export const { endBoilerTemperatureStream } = boilerTemperatureSlice.actions;

//
// SELECTORS
// ---------

export const selectCurTemp = (state: RootState) =>
  state.boilerTemperature.history[state.boilerTemperature.history.length - 1];
export const selectTempHistory = (state: RootState) => state.boilerTemperature.history;
