import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RecentActions from "../components/RecentActions";
import SetTemperatureModal from "../components/SetTemperatureModal";
import Temperature from "../components/Temperature";
import TemperatureOverTime from "../components/TemperatureOverTime";
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
  fixedHeight: {
    height: 500,
  },
}));

export default () => {
  const showSetTemperatureModal = useSelector(showTargetTempModal);

  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

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
          <Paper className={fixedHeightPaper}>
            <TemperatureOverTime title="Boiler Temperature" />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <Paper className={fixedHeightPaper}>
            <Temperature />
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
