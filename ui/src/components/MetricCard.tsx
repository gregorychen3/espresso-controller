import Typography from "@material-ui/core/Typography";
import React from "react";
import Title from "./Title";
import moment from "moment";
import { makeStyles, Box } from "@material-ui/core";

export type Severity = "normal" | "success" | "warning" | "error";

const severityColorMap = {
  normal: "text.primary",
  success: "success.main",
  warning: "warning.main",
  error: "error.main",
};

const useStyles = makeStyles({
  context: { flex: 1 },
});

interface Props {
  name: string;
  value: string | number;
  unitLabel: string;
  asOf?: moment.Moment;
  severity: Severity;
}
export default ({ name, value, unitLabel, asOf, severity }: Props) => {
  const classes = useStyles();

  return (
    <>
      <Title>{name}</Title>
      <Typography component="p" variant="h4">
        <Box color={severityColorMap[severity]}>
          {value} {unitLabel}
        </Box>
      </Typography>
      {asOf && (
        <Typography color="textSecondary" className={classes.context}>
          as of {asOf.format("HH:mm:ss")} Eastern Time
        </Typography>
      )}
    </>
  );
};
