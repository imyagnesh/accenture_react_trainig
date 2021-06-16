import React from 'react';

const FormikSelect = ({
  field,
  form: { touched, errors },
  label,
  options,
}) => (
  <div>
    <label htmlFor="name">{label}</label>
    <select {...field}>
        <option value="">{`Please select ${label}`}</option>
      {options.map((x) => <option key={x.value} value={x.value}>{x.text}</option>)}
    </select>
    {/* <input type="text" {...field} /> */}
    {touched[field.name] && errors[field.name] && <span style={{ color: 'red' }}>{errors[field.name]}</span>}
  </div>
);

export default FormikSelect;
