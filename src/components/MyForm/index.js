import React from 'react';
import { Formik, Form, Field } from 'formik';

const MyForm = ({ fields, ...props }) => (
  <Formik
    initialValues={fields.reduce((p, c) => ({ ...p, [c.name]: c.value }), {})}
    {...props}
  >
    {({
      values,
      handleChange,
      handleBlur,
      handleSubmit,
      errors,
      touched,
      isSubmitting,
    }) => (
      <Form>
        {fields.map((x) => <Field key={x.name} {...x} />)}
        <button type="submit">Register</button>
      </Form>
    )}
  </Formik>
);

export default MyForm;
