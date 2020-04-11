import moment from "moment";

export interface TemperatureSample {
  value: number;
  observedAt: moment.Moment;
}
