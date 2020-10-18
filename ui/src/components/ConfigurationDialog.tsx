import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import React from "react";
import { useDispatch } from "react-redux";
import { setConfigureDialogVisibility } from "../redux/uiSlice";
import ConfigurationForm from "./ConfigurationForm";

export default function ConfigurationDialog() {
  const d = useDispatch();

  const handleClose = () => d(setConfigureDialogVisibility(false));

  return (
    <Dialog open={true} onClose={handleClose}>
      <DialogTitle>Configure PID Controller Parameters</DialogTitle>
      <DialogContent>
        <ConfigurationForm />
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
