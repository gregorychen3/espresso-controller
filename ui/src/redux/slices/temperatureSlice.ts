import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import moment from "moment";
import {
  BoilerTemperatureRequest,
  BoilerTemperatureResponse,
} from "../../proto/pkg/appliancepb/appliance_pb";
import { TemperatureSample } from "../../types";
import { applianceClient, ReturnType } from "../helpers";

interface State {
  stream?: ReturnType<typeof applianceClient.boilerTemperature>;
  temperatureHistory: TemperatureSample[];
  isFetching: boolean;
}

export const temperatureSlice = createSlice({
  name: "temperature",
  initialState: {
    stream: undefined,
    temperatureHistory: [],
    isFetching: false,
  } as State,
  reducers: {
    // BoilerTemperature
    getBoilerTemperatureStream: (
      state,
      action: PayloadAction<
        ReturnType<typeof applianceClient.boilerTemperature>
      >
    ) => {
      state.stream = action.payload;
    },

    receiveBoilerTemperatureStreamMsg: (
      state,
      action: PayloadAction<BoilerTemperatureResponse>
    ) => {
      const msg = action.payload;
      const history = msg.getHistory();
      if (history) {
        const temperatureHistory = history
          .getSamplesList()
          .reduce((acc: TemperatureSample[], curSample) => {
            const observedAt = curSample.getObservedAt();
            return observedAt
              ? [
                  ...acc,
                  {
                    value: curSample.getValue(),
                    observedAt: moment(observedAt.toDate()),
                  },
                ]
              : acc;
          }, [])
          .filter((s) => s !== null);

        state.temperatureHistory = temperatureHistory;
      }

      const sample = msg.getSample();
      if (sample) {
        const observedAt = sample.getObservedAt();
        if (!observedAt) {
          return;
        }

        state.temperatureHistory.push({
          value: sample.getValue(),
          observedAt: moment(observedAt.toDate()),
        });
      }
    },
    closeBoilerTemperatureStream: (state) => {
      state.stream?.cancel();
      state.stream = undefined;
    },
  },
});

export const startBoilerTemperatureStream = (req: BoilerTemperatureRequest) => (
  dispatch: Dispatch
) => {
  const stream = applianceClient.boilerTemperature(req);
  dispatch(temperatureSlice.actions.getBoilerTemperatureStream(stream));

  stream.on("data", (msg) => {
    dispatch(temperatureSlice.actions.receiveBoilerTemperatureStreamMsg(msg));
  });
};

export const { closeBoilerTemperatureStream } = temperatureSlice.actions;
