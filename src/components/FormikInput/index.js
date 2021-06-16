import React from 'react';

const FormikInput = ({
    field,
    form: { touched, errors},
    label
}) => (
  <div>
    <label htmlFor="name">{label}</label>
    <input type="text" {...field} />
    {touched[field.name] && errors[field.name] && <span style={{ color: 'red' }}>{errors[field.name]}</span>}
  </div>
);

export default FormikInput;
