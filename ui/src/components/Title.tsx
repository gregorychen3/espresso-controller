import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

interface Props {
  children: React.ReactNode;
}
export default function Title({ children }: Props) {
  return (
    <Typography component="h2" variant="h6" color="primary" gutterBottom>
      {children}
    </Typography>
  );
}
