import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCurTemp } from "../redux/boilerTemperatureSlice";
import { selectPIDConfig } from "../redux/configurationSlice";
import { setConfigureDialogVisibility } from "../redux/uiSlice";
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
  const configuration = useSelector(selectPIDConfig);

  const handleConfigureClicked = () => d(setConfigureDialogVisibility(true));

  return (
    <>
      <Title>Temperature</Title>
      <Typography variant="h4" color="primary">
        {curTemp?.value.toFixed(2) ?? "--"} °C
      </Typography>
      {curTemp && (
        <Typography color="textSecondary" className={classes.temperatureContext}>
          as of {curTemp.observedAt.format("HH:mm:ss")}
        </Typography>
      )}
      <Title>Target Temperature</Title>
      <Typography variant="h4" color="primary">
        {configuration?.targetTemp.value} °C
      </Typography>
      <Typography color="textSecondary" className={classes.temperatureContext}>
        set {configuration?.targetTemp.setAt.fromNow()}
      </Typography>
      <div>
        <div className={classes.setTargetTempButton}>
          <Button variant="contained" color="primary" size="small" onClick={handleConfigureClicked}>
            CONFIGURE PID
          </Button>
        </div>
      </div>
    </>
  );
}
