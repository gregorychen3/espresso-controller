import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import React from "react";
import { useDispatch } from "react-redux";
import { setTargetTempModalVisibility } from "../redux/uiSlice";
import TargetTemperatureForm from "./TargetTemperatureForm";

export default () => {
  const d = useDispatch();

  const handleClose = () => {
    d(setTargetTempModalVisibility(false));
  };

  return (
    <Dialog open={true} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Set Target Temperature</DialogTitle>
      <DialogContent>
        <DialogContentText>
          The specified temperature will become the new set point of the temperature controller.
        </DialogContentText>
        <TargetTemperatureForm />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button type="submit" form="targettemperature" color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};
