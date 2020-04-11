import { InputAdornment } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import React, { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { SetTargetTemperatureRequest } from "../proto/pkg/appliancepb/appliance_pb";
import { setTargetTemperature } from "../redux/targetTemperatureSlice";
import { setTargetTempModalVisibility } from "../redux/uiSlice";

export default () => {
  const dispatch = useDispatch();

  const [targetTempInput, setTargetTempInput] = useState<number | undefined>(
    undefined
  );

  const handleClose = () => {
    dispatch(setTargetTempModalVisibility(false));
  };

  const handleTargetTempChanged = (e: ChangeEvent<HTMLInputElement>) => {
    setTargetTempInput(parseInt(e.target.value, 10));
  };

  const handleSubmit = () => {
    if (!targetTempInput) {
      return;
    }

    const req = new SetTargetTemperatureRequest();
    req.setTemperature(targetTempInput);
    dispatch(setTargetTemperature(req));
  };

  return (
    <Dialog
      open={true}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Set Target Temperature</DialogTitle>
      <DialogContent>
        <DialogContentText>
          The specified temperature will become the new set point of the PID
          controller.
        </DialogContentText>
        <TextField
          onChange={handleTargetTempChanged}
          autoFocus
          margin="dense"
          id="temperature"
          label="Temperature"
          type="number"
          InputProps={{
            endAdornment: <InputAdornment position="end">°C</InputAdornment>,
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button
          disabled={!targetTempInput}
          onClick={handleSubmit}
          color="primary"
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};
