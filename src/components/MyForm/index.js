import React from "react";
import { Formik, Form, Field } from "formik";

const MyForm = ({ fields, ...props }) => (
  <Formik
    initialValues={fields.reduce((p, c) => ({ ...p, [c.name]: c.value }), {})}
    {...props}
  >
    {({ isSubmitting, errors }) => (
      <Form>
        {errors.serverError && (
          <h3 style={{ color: "red" }}>{errors.serverError}</h3>
        )}
        {fields.map((x) => (
          <Field key={x.name} {...x} />
        ))}
        <button disabled={isSubmitting} type="submit">
          Register
        </button>
      </Form>
    )}
  </Formik>
);

export default MyForm;
