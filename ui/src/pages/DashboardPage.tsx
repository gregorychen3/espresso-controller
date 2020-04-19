import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import moment from "moment";
import parsePromText, { Metric } from "parse-prometheus-text-format";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MetricCard from "../components/MetricCard";
import RecentActions from "../components/RecentActions";
import SetTemperatureModal from "../components/SetTemperatureModal";
import TemperatureCard from "../components/TemperatureCard";
import TemperatureChart from "../components/TemperatureChart";
import {
  GetCurrentTemperatureRequest,
  GetTargetTemperatureRequest,
  GetTemperatureHistoryRequest,
} from "../proto/pkg/appliancepb/appliance_pb";
import { showTargetTempModal } from "../redux/selectors";
import { getTargetTemperature } from "../redux/slices/targetTemperatureSlice";
import {
  getCurrentTemperature,
  getTemperatureHistory,
} from "../redux/slices/temperatureSlice";

const boilerTemperatureRefreshIntervalMillis = 2000;
const metricsRefreshIntervalMillis = 5000;

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  halfHeight: {
    height: 250,
  },
  tallHeight: {
    height: 500,
  },
}));

export default () => {
  const showSetTemperatureModal = useSelector(showTargetTempModal);

  const classes = useStyles();
  const halfHeightPaper = clsx(classes.paper, classes.halfHeight);
  const tallHeightPaper = clsx(classes.paper, classes.tallHeight);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTemperatureHistory(new GetTemperatureHistoryRequest()));
    const interval = setInterval(() => {
      dispatch(getCurrentTemperature(new GetCurrentTemperatureRequest()));
    }, boilerTemperatureRefreshIntervalMillis);

    return () => {
      clearInterval(interval);
    };
  }, [dispatch]);

  const [metricsRefreshedAt, setMetricsRefreshedAt] = useState<
    moment.Moment | undefined
  >();
  const [cpuUtilization, setCpuUtilization] = useState<number | undefined>();
  const [memUtilization, setMemUtilization] = useState<number | undefined>();
  const [cpuTemperature, setCpuTemperature] = useState<number | undefined>();
  const [gpuTemperature, setGpuTemperature] = useState<number | undefined>();
  useEffect(() => {
    const interval = setInterval(async () => {
      const metricsResp = await fetch("/metrics");
      const metricsRaw = await metricsResp.text();
      const metricsMap: { [key: string]: Metric } = parsePromText(
        metricsRaw
      ).reduce((acc, cur) => {
        return { ...acc, [cur.name]: cur };
      }, {});

      setMetricsRefreshedAt(moment());
      setCpuUtilization(
        100 *
          parseFloat(
            metricsMap.espresso_raspi_cpu_utilization_ratio.metrics[0].value
          )
      );
      setMemUtilization(
        100 *
          parseFloat(
            metricsMap.espresso_raspi_mem_utilization_ratio.metrics[0].value
          )
      );
      setCpuTemperature(
        parseFloat(metricsMap.espresso_raspi_cpu_temperature.metrics[0].value)
      );
      setGpuTemperature(
        parseFloat(metricsMap.espresso_raspi_gpu_temperature.metrics[0].value)
      );
    }, metricsRefreshIntervalMillis);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    dispatch(getTargetTemperature(new GetTargetTemperatureRequest()));
  }, [dispatch]);

  return (
    <>
      {showSetTemperatureModal && <SetTemperatureModal />}
      <Grid container spacing={3}>
        <Grid item xs={12} md={8} lg={9}>
          <Paper className={tallHeightPaper}>
            <TemperatureChart title="Boiler Temperature" />
          </Paper>
        </Grid>

        <Grid item xs={12} md={4} lg={3}>
          <Paper className={tallHeightPaper}>
            <TemperatureCard />
          </Paper>
        </Grid>

        <Grid item xs={12} md={3} lg={3}>
          <Paper className={halfHeightPaper}>
            <MetricCard
              name="CPU Usage"
              value={cpuUtilization?.toFixed(2) ?? "--"}
              unitLabel="%"
            />
          </Paper>
        </Grid>
        <Grid item xs={12} md={3} lg={3}>
          <Paper className={halfHeightPaper}>
            <MetricCard
              name="Memory Usage"
              value={memUtilization?.toFixed(2) ?? "--"}
              unitLabel="%"
            />
          </Paper>
        </Grid>
        <Grid item xs={12} md={3} lg={3}>
          <Paper className={halfHeightPaper}>
            <MetricCard
              name="CPU Temperature"
              value={cpuTemperature?.toFixed(2) ?? "--"}
              unitLabel="°C"
            />
          </Paper>
        </Grid>
        <Grid item xs={12} md={3} lg={3}>
          <Paper className={halfHeightPaper}>
            <MetricCard
              name="GPU Temperature"
              value={gpuTemperature?.toFixed(2) ?? "--"}
              unitLabel="°C"
            />
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <RecentActions />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};
