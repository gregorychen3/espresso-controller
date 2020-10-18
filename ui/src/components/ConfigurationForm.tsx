import { Grid, InputAdornment } from "@material-ui/core";
import { Field, FieldAttributes, Form, Formik } from "formik";
import { TextField } from "formik-material-ui";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { SetConfigurationRequest } from "../proto/pkg/espressopb/espresso_pb";
import { selectConfiguration, setConfiguration } from "../redux/configurationSlice";

const NumberField = (props: FieldAttributes<any>) => (
  <Field component={TextField} margin="dense" type="number" fullWidth {...props} />
);

const validationSchema = Yup.object().shape({
  targetTemp: Yup.number()
    .min(0, "Must be in range [0, 100] °C")
    .max(100, "Must be in range [0, 100] °C")
    .required("Required"),
  p: Yup.number().min(0, "Must be > 0").required("Required"),
  d: Yup.number().min(0, "Must be > 0").required("Required"),
});

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
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        const req = new SetConfigurationRequest();
        req.setTemperature(values.targetTemp as number);
        d(setConfiguration({ request: req }));
        setSubmitting(false);
      }}
    >
      <Form id="configuration">
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <NumberField
              name="targetTemp"
              label="Temperature"
              InputProps={{ endAdornment: <InputAdornment position="end">°C</InputAdornment> }}
              autoFocus
            />
          </Grid>
          <Grid item xs={4}>
            <NumberField name="p" label="Proportional Term" />
          </Grid>
          <Grid item xs={4}>
            <NumberField name="d" label="Derivative Term" />
          </Grid>
        </Grid>
      </Form>
    </Formik>
  );
}
