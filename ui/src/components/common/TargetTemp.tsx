import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Target Temperature
      </Typography>
      <Typography component="p" variant="h4">
        93°C
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        set at 11:45PM 04/09/2020
      </Typography>
    </React.Fragment>
  );
}
