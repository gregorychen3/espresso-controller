import Typography from "@material-ui/core/Typography";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function Title({ children }: Props) {
  return (
    <Typography component="h2" variant="h6" color="textSecondary" gutterBottom>
      {children}
    </Typography>
  );
}
