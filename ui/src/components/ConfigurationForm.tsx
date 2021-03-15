import { Grid, InputAdornment } from "@material-ui/core";
import { Field, FieldAttributes, Form, Formik } from "formik";
import { TextField } from "formik-material-ui";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { Configuration } from "../proto/pkg/espressopb/espresso_pb";
import { selectConfiguration, setConfiguration } from "../redux/configurationSlice";

const NumberField = (props: FieldAttributes<any>) => (
  <Field component={TextField} margin="dense" type="number" fullWidth {...props} />
);

const validationSchema = Yup.object().shape({
  targetTemp: Yup.number()
    .min(0, "Must be in range [0, 140] °C")
    .max(140, "Must be in range [0, 140] °C")
    .required("Required"),
  p: Yup.number().min(0, "Must be > 0").required("Required"),
  i: Yup.number().min(0, "Must be > 0").required("Required"),
  d: Yup.number().min(0, "Must be > 0").required("Required"),
});

interface Values {
  targetTemp: number | "";
  p: number | "";
  i: number | "";
  d: number | "";
}

export default function ConfigurationForm() {
  const d = useDispatch();
  const configuration = useSelector(selectConfiguration);
  const initialValues: Values = configuration
    ? { targetTemp: configuration.targetTemp.value, p: configuration.p, i: configuration.i, d: configuration.d }
    : { targetTemp: "", p: "", i: "", d: "" };

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        const req = new Configuration();
        req.setTemperature(values.targetTemp as number);
        req.setP(values.p as number);
        req.setI(values.i as number);
        req.setD(values.d as number);
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
            />
          </Grid>
          <Grid item xs={8} />
          <Grid item xs={4}>
            <NumberField name="p" label="Proportional Term" />
          </Grid>
          <Grid item xs={4}>
            <NumberField name="i" label="Integral Term" />
          </Grid>
          <Grid item xs={4}>
            <NumberField name="d" label="Derivative Term" />
          </Grid>
        </Grid>
      </Form>
    </Formik>
  );
}
