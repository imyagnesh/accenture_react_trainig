/* eslint-disable */
import React, { Component, createRef } from 'react';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import fields from './fields'
import MyForm from '../../components/MyForm';

const wait = (time) => new Promise(resolve => setTimeout(resolve, 5000));

class Login extends Component {

  render() {
    return (
      <div>
        <h1>Login Page</h1>
        <MyForm fields={fields} onSubmit={(values) => console.log(values)} />
      </div>
    );
  }
}

export default Login;
