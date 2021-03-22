import { IconButton, makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import InfoIcon from "@material-ui/icons/Info";
import React from "react";
import { useDispatch } from "react-redux";
import { setConfigureDialogVisibility } from "../redux/uiSlice";
import PidConfigForm from "./PidConfigForm";

const useStyles = makeStyles((theme) => ({
  info: {
    marginLeft: theme.spacing(2),
  },
}));

export default function ConfigurationDialog() {
  const d = useDispatch();
  const classes = useStyles();

  const handleClose = () => d(setConfigureDialogVisibility(false));

  return (
    <Dialog open={true} onClose={handleClose}>
      <DialogTitle>
        Configure PID Parameters
        <IconButton
          href="https://en.wikipedia.org/wiki/PID_controller"
          target="_blank"
          size="small"
          className={classes.info}
        >
          <InfoIcon fontSize="small" />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <PidConfigForm />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button type="submit" form="configuration" color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}
