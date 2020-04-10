import { Icon, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  iconRoot: {
    textAlign: "center",
  },
  imageIcon: {
    height: "100%",
  },
});

export default (props: any) => {
  const classes = useStyles();

  return (
    <Icon {...props} classes={{ root: classes.iconRoot }}>
      <img className={`${classes.imageIcon}`} src="logo.svg" />
    </Icon>
  );
};
