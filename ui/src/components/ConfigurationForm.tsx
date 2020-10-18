import { InputAdornment } from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-material-ui";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SetConfigurationRequest } from "../proto/pkg/espressopb/espresso_pb";
import { selectConfiguration, setConfiguration } from "../redux/configurationSlice";

interface Values {
  targetTemp: number | "";
  p: number | "";
  d: number | "";
}
export default function ConfigurationForm() {
  const d = useDispatch();
  const configuration = useSelector(selectConfiguration);
  const initialValues: Values = configuration
    ? { targetTemp: configuration.targetTemp.value, p: configuration.p, d: configuration.d }
    : { targetTemp: "", p: "", d: "" };

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      validate={(values) => {
        if (!values.targetTemp) {
          return { targetTemperature: "Required" };
        }
        if (values.targetTemp < 0 || values.targetTemp > 100) {
          return {
            targetTemperature: "Must be in range [0, 100] °C",
          };
        }
        return {};
      }}
      onSubmit={(values, { setSubmitting }) => {
        const req = new SetConfigurationRequest();
        req.setTemperature(values.targetTemp as number);
        d(setConfiguration({ request: req }));
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
