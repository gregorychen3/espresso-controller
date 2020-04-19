declare module "parse-prometheus-text-format" {
  export interface Metric {
    name: string;
    help: string;
    type: string;
    metrics: MetricDataPoint[];
  }

  export interface MetricDataPoint {
    value: string;
    labels: { [key: string]: string };
  }

  export default function(prometheusText: string): Metric[];
}
