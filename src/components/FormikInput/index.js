import React from 'react';
import { Formik, Field} from 'formik'

const FormikInput = ({ 
    field, 
    form: { errors, touched },
    label
}) => (
  <div>
    <label htmlFor="name">{label}</label>
    <input type="text" {...field} />
    {touched[field.name] && errors.name && <span style={{ color: 'red' }}>{errors[field.name]}</span>}
  </div>
);

export default FormikInput;
