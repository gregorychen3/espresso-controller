import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";
import { BoilerTemperatureRequest } from "../../proto/pkg/appliancepb/appliance_pb";
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
    startBoilerTemperatureStream: (state) => {
      const stream = applianceClient.boilerTemperature(
        new BoilerTemperatureRequest()
      );
      stream.on("data", (msg) => {
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
      });

      state.stream = stream;
    },
    closeBoilerTemperatureStream: (state) => {
      state.stream?.cancel();
      state.stream = undefined;
    },
  },
});

export const {
  startBoilerTemperatureStream,
  closeBoilerTemperatureStream,
} = temperatureSlice.actions;
