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
          <MyForm fields={fields} onSubmit={async (values) => {
              console.log(values);
              await fetch('http://localhost:8080/users', {
                  method: "POST",
                  body: JSON.stringify(values),
                  headers: {
                      "Content-Type": "application/json",
                      "Accept": "application/json",
                  }
              })
              this.props.history.push('/');
          }} />
      </div>
    );
  }
}

export default Register;
