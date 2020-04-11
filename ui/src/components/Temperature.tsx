import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { useSelector } from "react-redux";
import { getCurTemp, getTargetTemp } from "../redux/selectors";
import SetTemperatureModal from "./SetTemperatureModal";
import Title from "./Title";

const useStyles = makeStyles({
  temperatureContext: {
    flex: 1,
  },
});

export default () => {
  const classes = useStyles();
  const curTemp = useSelector(getCurTemp);
  const targetTemp = useSelector(getTargetTemp);

  return (
    <React.Fragment>
      <Title>Current Temperature</Title>
      <Typography component="p" variant="h4">
        {curTemp} °C
      </Typography>
      <Typography color="textSecondary" className={classes.temperatureContext}>
        at 2:34pm 15 March, 2019
      </Typography>
      <Title>Target Temperature</Title>
      <Typography component="p" variant="h4">
        {targetTemp} °C
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
