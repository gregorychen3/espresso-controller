import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RecentActions from "../components/RecentActions";
import SetTemperatureModal from "../components/SetTemperatureModal";
import Temperature from "../components/Temperature";
import TemperatureChart from "../components/TemperatureChart";
import {
  GetCurrentTemperatureRequest,
  GetTargetTemperatureRequest,
  GetTemperatureHistoryRequest,
} from "../proto/pkg/appliancepb/appliance_pb";
import {
  getCurrentTemperature,
  getTemperatureHistory,
} from "../redux/temperatureSlice";
import { showTargetTempModal } from "../redux/selectors";
import { getTargetTemperature } from "../redux/targetTemperatureSlice";

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
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [dispatch]);

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
            <Temperature />
          </Paper>
        </Grid>

        <Grid item xs={12} md={6} lg={3}>
          <Paper className={halfHeightPaper}></Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Paper className={halfHeightPaper}></Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Paper className={halfHeightPaper}></Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Paper className={halfHeightPaper}></Paper>
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
