import React from 'react';
import { Formik, Field } from 'formik';

const FormikSelect = ({
  field,
  form: { errors, touched },
  label,
  options,
}) => (
  <div>
    <label htmlFor="name">{label}</label>
    <select {...field}>
      <option value="">{`Please select a ${label}`}</option>
      {options.map((x) => <option key={x.value} value={x.value}>{x.text}</option>)}
    </select>
    {touched[field.name] && errors.name && <span style={{ color: 'red' }}>{errors[field.name]}</span>}
  </div>
);

export default FormikSelect;
