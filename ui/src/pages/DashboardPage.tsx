import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import RecentActions from "../components/RecentActions";
import Temperature from "../components/Temperature";
import TemperatureOverTime from "../components/TemperatureOverTime";
import { GetCurrentTemperatureRequest } from "../proto/pkg/appliancepb/appliance_pb";
import { getCurrentTemperature } from "../redux/curTempSlice";

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
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentTemperature(new GetCurrentTemperatureRequest()));
  }, [dispatch]);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8} lg={9}>
        <Paper className={fixedHeightPaper}>
          <TemperatureOverTime />
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
  );
};
