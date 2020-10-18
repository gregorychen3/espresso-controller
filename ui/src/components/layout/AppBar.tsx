import { makeStyles } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import GitHubIcon from "@material-ui/icons/GitHub";
import TimelineIcon from "@material-ui/icons/Timeline";
import React from "react";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  title: {
    flexGrow: 1,
  },
}));

export default () => {
  const classes = useStyles();

  return (
    <AppBar position="absolute" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <IconButton edge="start" color="inherit" aria-label="open drawer" className={classes.menuButton}>
          <TimelineIcon fontSize="large" />
        </IconButton>
        <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
          Espresso Controller
        </Typography>
        <IconButton href="https://github.com/gregorychen3/espresso-controller" target="_blank" color="inherit">
          <GitHubIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
