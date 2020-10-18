import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppBar from "./components/AppHeader";
import DashboardPage from "./pages/DashboardPage";
import { getThemedToastClass } from "./theme";

const useStyles = makeStyles((theme) => ({
  root: { display: "flex" },
  toast: getThemedToastClass(theme),
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

export default function Dashboard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <DashboardPage />
        </Container>
      </main>
      <ToastContainer toastClassName={classes.toast} />
    </div>
  );
}
