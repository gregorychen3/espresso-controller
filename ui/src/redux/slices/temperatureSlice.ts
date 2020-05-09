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
}

export const temperatureSlice = createSlice({
  name: "temperature",
  initialState: {
    stream: undefined,
    temperatureHistory: [],
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
      switch (msg.getDataCase()) {
        case BoilerTemperatureResponse.DataCase.HISTORY:
          const history = msg.getHistory();
          if (!history) {
            console.error(
              "Failed to process boiler temperature stream message data"
            );
            return;
          }

          state.temperatureHistory = history
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
          break;
        case BoilerTemperatureResponse.DataCase.SAMPLE:
          const sample = msg.getSample();
          if (!sample) {
            console.error(
              "Failed to process boiler temperature stream message data"
            );
            return;
          }

          const observedAt = sample.getObservedAt();
          if (!observedAt) {
            console.error(
              "Failed to process boiler temperature stream message data"
            );
            return;
          }

          state.temperatureHistory.push({
            value: sample.getValue(),
            observedAt: moment(observedAt.toDate()),
          });
          break;
        default:
          console.error(
            "Failed to process boiler temperature stream message data"
          );
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
