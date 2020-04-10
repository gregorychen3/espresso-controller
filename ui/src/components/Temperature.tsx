import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import SetTemperatureModal from "./SetTemperatureModal";
import Title from "./Title";

const useStyles = makeStyles({
  temperatureContext: {
    flex: 1,
  },
});

export default () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Title>Current Temperature</Title>
      <Typography component="p" variant="h4">
        90 °C
      </Typography>
      <Typography color="textSecondary" className={classes.temperatureContext}>
        at 2:34pm 15 March, 2019
      </Typography>
      <Title>Target Temperature</Title>
      <Typography component="p" variant="h4">
        93 °C
      </Typography>
      <Typography color="textSecondary" className={classes.temperatureContext}>
        set at 2:34pm 15 March, 2019
      </Typography>
      <div>
        <SetTemperatureModal />
      </div>
    </React.Fragment>
  );
};
