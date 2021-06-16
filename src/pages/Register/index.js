/* eslint-disable */
import React, { Component } from 'react';
import MyForm from '../../components/MyForm'
import fields from './fields';
// name
// username
// password
// confirmPassword

// 1. created normal form using html
// 2. wrap form in Formik
// 3. put form inside function
class Register extends Component {
  render() {
    return (
      <div>
          <h1>Register Page</h1>
          <MyForm fields={fields} onSubmit={(values) => {
              console.log(values);
          }} />
      </div>
    );
  }
}

export default Register;
