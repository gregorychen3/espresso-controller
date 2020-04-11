import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurTemp, getTargetTemp } from "../redux/selectors";
import { setTargetTempModalVisibility } from "../redux/uiSlice";
import Title from "./Title";

const useStyles = makeStyles({
  temperatureContext: {
    flex: 1,
  },
  setTargetTempButton: { textAlign: "center" },
});

export default () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const curTemp = useSelector(getCurTemp);
  const targetTemp = useSelector(getTargetTemp);

  const handleSetTargetTempButtonClicked = () => {
    dispatch(setTargetTempModalVisibility(true));
  };

  return (
    <>
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
        <div className={classes.setTargetTempButton}>
          <Button
            variant="outlined"
            color="primary"
            size="small"
            onClick={handleSetTargetTempButtonClicked}
          >
            Set target temperature
          </Button>
        </div>
      </div>
    </>
  );
};
