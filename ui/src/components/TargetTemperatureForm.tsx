import { InputAdornment } from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-material-ui";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SetTargetTemperatureRequest } from "../proto/pkg/espressopb/espresso_pb";
import { getTargetTemp } from "../redux/selectors";
import { setTargetTemperature } from "../redux/slices/targetTemperatureSlice";

export default function TargetTemperatureForm() {
  const d = useDispatch();
  const curTargetTemperature = useSelector(getTargetTemp);

  return (
    <Formik
      enableReinitialize
      initialValues={{
        targetTemperature: curTargetTemperature?.value,
      }}
      validate={(values) => {
        if (!values.targetTemperature) {
          return { targetTemperature: "Required" };
        }
        if (values.targetTemperature < 0 || values.targetTemperature > 100) {
          return {
            targetTemperature: "Must be in range [0, 100] °C",
          };
        }
        return {};
      }}
      onSubmit={(values, { setSubmitting }) => {
        const req = new SetTargetTemperatureRequest();
        req.setTemperature(values.targetTemperature!);
        d(setTargetTemperature(req));
        setSubmitting(false);
      }}
    >
      {() => (
        <Form id="targettemperature">
          <Field
            component={TextField}
            name="targetTemperature"
            autoFocus
            margin="dense"
            id="temperature"
            label="Temperature"
            type="number"
            InputProps={{
              endAdornment: <InputAdornment position="end">°C</InputAdornment>,
            }}
          />
        </Form>
      )}
    </Formik>
  );
}
