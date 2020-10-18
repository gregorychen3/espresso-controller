import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCurTemp } from "../redux/boilerTemperatureSlice";
import { selectTargetTemp } from "../redux/configurationSlice";
import { setTargetTempModalVisibility } from "../redux/uiSlice";
import Title from "./Title";

const useStyles = makeStyles({
  temperatureContext: {
    flex: 1,
  },
  setTargetTempButton: { textAlign: "center" },
});

export default function TemperatureCard() {
  const d = useDispatch();
  const classes = useStyles();

  const curTemp = useSelector(selectCurTemp);
  const targetTemp = useSelector(selectTargetTemp);

  const handleSetTargetTempButtonClicked = () => {
    d(setTargetTempModalVisibility(true));
  };

  return (
    <>
      <Title>Boiler Temperature</Title>
      <Typography component="p" variant="h4">
        {curTemp?.value.toFixed(1) ?? "--"} °C
      </Typography>
      {curTemp && (
        <Typography color="textSecondary" className={classes.temperatureContext}>
          as of {curTemp.observedAt.format("HH:mm:ss")} Eastern Time
        </Typography>
      )}
      <Title>Target Boiler Temperature</Title>
      <Typography component="p" variant="h4">
        {targetTemp?.value} °C
      </Typography>
      <Typography color="textSecondary" className={classes.temperatureContext}>
        set {targetTemp?.setAt.fromNow()}
      </Typography>
      <div>
        <div className={classes.setTargetTempButton}>
          <Button variant="contained" color="primary" size="small" onClick={handleSetTargetTempButtonClicked}>
            CONFIGURE
          </Button>
        </div>
      </div>
    </>
  );
}
