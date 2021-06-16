/* eslint-disable */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import fields from './fields';
import MyForm from '../../components/MyForm';
class Login extends Component {
  render() {
    return (
      <div>
        <h1>Login Page</h1>
        <MyForm fields={fields} onSubmit={async (values, actions) => {
          console.log(actions);
          try {
            const res = await fetch(`http://localhost:8080/users?username=${values.username}&password=${values.password}`)
            const users = await res.json();
            if(users.length > 0) {
              sessionStorage.setItem('token', JSON.stringify(users[0]));
              this.props.history.push('/home');
            } else {
              actions.setErrors({serverError: 'Please provide correct username and password'});
            };
          } catch (error) {
            actions.setErrors({serverError: error.message});
          }
        }}/>
      </div>
    );
  }
}

export default Login;
