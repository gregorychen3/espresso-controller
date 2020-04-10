import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "./Title";

function preventDefault(event: any) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Title>Current Temperature</Title>
      <Typography component="p" variant="h4">
        90 °C
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        at 2:34pm 15 March, 2019
      </Typography>
      <Title>Target Temperature</Title>
      <Typography component="p" variant="h4">
        93 °C
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        set at 2:34pm 15 March, 2019
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          Set new target temperature
        </Link>
      </div>
    </React.Fragment>
  );
}
