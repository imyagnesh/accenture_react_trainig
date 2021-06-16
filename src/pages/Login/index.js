/* eslint-disable */
import React, { Component, createRef } from 'react';
import { Link } from 'react-router-dom';
import MyForm from '../../components/MyForm';
import fields from './fields';

const wait = (time) => new Promise(resolve => setTimeout(resolve, 5000));

class Login extends Component {

  render() {
    return (
      <div>
        <h1>Login Page</h1>
        <MyForm
          fields={fields}
          onSubmit={async (values) => {
            const res = await fetch(`http://localhost:8080/users?username=${values.username}&password=${values.password}`);
            const users = await res.json();
            if(users.length > 0) {
                alert('login success')
            } else {
                alert('please provide correct credentials')
            }
          }}
        />
        <Link to="/register">Register</Link>
      </div>
    );
  }
}

export default Login;
