import Typography from "@material-ui/core/Typography";
import React from "react";
import Title from "./Title";

interface Props {
  name: string;
  value: string | number;
  unitLabel: string;
}
export default ({ name, value, unitLabel }: Props) => {
  return (
    <>
      <Title>{name}</Title>
      <Typography component="p" variant="h4">
        {value} {unitLabel}
      </Typography>
    </>
  );
};
