import { InputAdornment } from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-material-ui";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { SetTargetTemperatureRequest } from "../proto/pkg/espressopb/espresso_pb";
import { getTargetTemp } from "../redux/selectors";
import { setTargetTemperature } from "../redux/slices/targetTemperatureSlice";

const schema = Yup.object().shape({
  targetTemperature: Yup.number()
    .min(0, "Too low")
    .max(100, "Too high")
    .required("Required"),
});

export default () => {
  const d = useDispatch();
  const curTargetTemperature = useSelector(getTargetTemp);

  return (
    <Formik
      enableReinitialize
      initialValues={{
        targetTemperature: curTargetTemperature?.value,
      }}
      validationSchema={schema}
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
};
