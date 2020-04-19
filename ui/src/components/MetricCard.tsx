import Typography from "@material-ui/core/Typography";
import React from "react";
import Title from "./Title";
import moment from "moment";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  context: { flex: 1 },
});

interface Props {
  name: string;
  value: string | number;
  unitLabel: string;
  asOf?: moment.Moment;
}
export default ({ name, value, unitLabel, asOf }: Props) => {
  const classes = useStyles();
  return (
    <>
      <Title>{name}</Title>
      <Typography component="p" variant="h4">
        {value} {unitLabel}
      </Typography>
      {asOf && (
        <Typography color="textSecondary" className={classes.context}>
          as of {asOf.format("HH:mm:ss")} Eastern Time
        </Typography>
      )}
    </>
  );
};
