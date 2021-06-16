
import React, { Component } from 'react';
import MyForm from '../../components/MyForm'
import fields from './fields';

class Login extends Component {
  render() {
    return (
      <div>
          <h1>Login Page</h1>
          <MyForm fields={fields} onSubmit={(values) => {
              console.log(values);
          }} />
      </div>
    );
  }
}

export default Login;
