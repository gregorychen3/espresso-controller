import { Box, makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import format from "date-fns/format";
import React from "react";
import Title from "./Title";

const dateFormat = "HH:mm:ss";

export type Severity = "normal" | "success" | "warning" | "error";

const severityColorMap = {
  normal: "primary.main",
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
  asOf?: Date;
  severity: Severity;
}
export default function MetricCard({ name, value, unitLabel, asOf, severity }: Props) {
  const classes = useStyles();

  return (
    <>
      <Title>{name}</Title>
      <Typography variant="h4">
        <Box color={severityColorMap[severity]}>
          {value} {unitLabel}
        </Box>
      </Typography>
      {asOf && (
        <Typography color="textSecondary" className={classes.context}>
          as of {asOf && format(asOf, dateFormat)}
        </Typography>
      )}
    </>
  );
}
