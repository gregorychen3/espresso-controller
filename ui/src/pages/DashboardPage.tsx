import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";
import parsePromText, { Metric } from "parse-prometheus-text-format";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ConfigurationDialog from "../components/ConfigurationDialog";
import MetricCard, { Severity } from "../components/MetricCard";
import TemperatureCard from "../components/TemperatureCard";
import TemperatureChart from "../components/TemperatureChart";
import { GetConfigurationRequest, TemperatureStreamRequest } from "../proto/pkg/espressopb/espresso_pb";
import { showTargetTempModal } from "../redux/selectors";
import { endBoilerTemperatureStream, startBoilerTemperatureStream } from "../redux/boilerTemperatureSlice";
import { getConfiguration } from "../redux/configurationSlice";

const metricsRefreshIntervalMillis = 5000;

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  tallPaper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
    height: 500,
  },
}));

export default () => {
  const showSetTemperatureModal = useSelector(showTargetTempModal);

  const classes = useStyles();

  const d = useDispatch();

  //
  // Boiler temperature
  // ------------------
  useEffect(() => {
    d(startBoilerTemperatureStream(new TemperatureStreamRequest()));
    return () => {
      d(endBoilerTemperatureStream());
    };
  }, [d]);

  //
  // System metrics
  // --------------
  const [metricsRefreshedAt, setMetricsRefreshedAt] = useState<moment.Moment | undefined>();
  const [cpuUtilization, setCpuUtilization] = useState<number | undefined>();
  const [memUtilization, setMemUtilization] = useState<number | undefined>();
  const [cpuTemperature, setCpuTemperature] = useState<number | undefined>();
  const [gpuTemperature, setGpuTemperature] = useState<number | undefined>();
  const refreshMetrics = async () => {
    const metricsResp = await fetch("/metrics");
    const metricsRaw = await metricsResp.text();
    const metricsMap: { [key: string]: Metric } = parsePromText(metricsRaw).reduce((acc, cur) => {
      return { ...acc, [cur.name]: cur };
    }, {});

    setMetricsRefreshedAt(moment());
    setCpuUtilization(100 * parseFloat(metricsMap.espresso_raspi_cpu_utilization_ratio.metrics[0].value));
    setMemUtilization(100 * parseFloat(metricsMap.espresso_raspi_mem_utilization_ratio.metrics[0].value));
    setCpuTemperature(parseFloat(metricsMap.espresso_raspi_cpu_temperature.metrics[0].value));
    setGpuTemperature(parseFloat(metricsMap.espresso_raspi_gpu_temperature.metrics[0].value));
  };
  useEffect(() => {
    refreshMetrics();
    const interval = setInterval(refreshMetrics, metricsRefreshIntervalMillis);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    d(getConfiguration({ request: new GetConfigurationRequest() }));
  }, [d]);

  const getRaspiTemperatureSeverity = (raspiTemperature: number): Severity => {
    if (raspiTemperature < 80) {
      return "normal";
    } else if (80 <= raspiTemperature && raspiTemperature < 85) {
      return "warning";
    } else {
      return "error";
    }
  };

  return (
    <>
      {showSetTemperatureModal && <ConfigurationDialog />}
      <Grid container spacing={3}>
        <Grid item xs={12} md={9} lg={9}>
          <Paper className={classes.tallPaper}>
            <TemperatureChart />
          </Paper>
        </Grid>

        <Grid item xs={12} md={3} lg={3}>
          <Paper className={classes.tallPaper}>
            <TemperatureCard />
          </Paper>
        </Grid>

        <Grid item xs={12} md={3} lg={3}>
          <Paper className={classes.paper}>
            <MetricCard
              name="CPU Usage"
              value={cpuUtilization?.toFixed(2) ?? "--"}
              unitLabel="%"
              asOf={metricsRefreshedAt}
              severity={"normal"}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} md={3} lg={3}>
          <Paper className={classes.paper}>
            <MetricCard
              name="Memory Usage"
              value={memUtilization?.toFixed(2) ?? "--"}
              unitLabel="%"
              asOf={metricsRefreshedAt}
              severity={"normal"}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} md={3} lg={3}>
          <Paper className={classes.paper}>
            <MetricCard
              name="CPU Temperature"
              value={cpuTemperature?.toFixed(2) ?? "--"}
              unitLabel="°C"
              asOf={metricsRefreshedAt}
              severity={cpuTemperature ? getRaspiTemperatureSeverity(cpuTemperature) : "normal"}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} md={3} lg={3}>
          <Paper className={classes.paper}>
            <MetricCard
              name="GPU Temperature"
              value={gpuTemperature?.toFixed(2) ?? "--"}
              unitLabel="°C"
              asOf={metricsRefreshedAt}
              severity={gpuTemperature ? getRaspiTemperatureSeverity(gpuTemperature) : "normal"}
            />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};
