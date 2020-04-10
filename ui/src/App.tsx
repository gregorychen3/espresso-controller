import { Container, Grid, makeStyles, Paper } from "@material-ui/core";
import classNames from "classnames";
import React from "react";
import "typeface-roboto";
import "./App.css";
import TargetTemp from "./components/common/TargetTemp";
import TemperatureChart from "./components/common/TemperatureChart";
import NavBar from "./components/layout/NavBar";

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
}));

export default () => {
  const classes = useStyles();

  return (
    <>
      <NavBar />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={classNames(classes.fixedHeight, classes.paper)}>
                <TemperatureChart />
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={classNames(classes.fixedHeight, classes.paper)}>
                <TargetTemp />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </>
  );
};
