import { InputAdornment, makeStyles } from "@material-ui/core";
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
import { setTargetTemperature } from "../redux/targetTempSlice";

const useStyles = makeStyles({
  button: { textAlign: "center" },
});

export default () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const [targetTempInput, setTargetTempInput] = useState<number | undefined>(
    undefined
  );

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
    <div>
      <div className={classes.button}>
        <Button
          variant="outlined"
          color="primary"
          size="small"
          onClick={handleClickOpen}
        >
          Set target temperature
        </Button>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Set Target Temperature</DialogTitle>
        <DialogContent>
          <DialogContentText>
            The specified temperature will become the new setpoint of the PID
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
          <Button onClick={handleSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
