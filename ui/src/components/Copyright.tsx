import { Box, Link, Typography } from "@material-ui/core";
import React from "react";

export default () => (
  <Box pt={4}>
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="http://www.gregory-chen.com/">
        Gregory Chen
      </Link>{" "}
      {new Date().getFullYear()}
    </Typography>
  </Box>
);
