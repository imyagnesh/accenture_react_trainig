/* eslint-disable */
import React, { Component, createRef } from 'react';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';

const wait = (time) => new Promise(resolve => setTimeout(resolve, 5000));

class Login extends Component {

  render() {
    return (
      <div>
        <h1>Login Page</h1>
        <Formik
          initialValues={{
            username: '',
            password: '',
          }}
          validate={(values) => {
            const error = {};
            if(!values.username) {
                error.username = "Please Enter Username"
            }
            if(!values.password) {
                error.password = "Please Enter Password"
            }
            
            return error;
          }}
          onSubmit={async (values, actions) => {
            await wait(5000);
            console.log(values);
          }}
        >
          {({
                values,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                errors,
                touched
          }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" value={values.username} onChange={handleChange} onBlur={handleBlur} />
                {touched.username && errors.username && <span style={{ color: 'red'}}>{errors.username}</span>}
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" value={values.password} onChange={handleChange} onBlur={handleBlur} />
                {touched.password && errors.password && <span style={{ color: 'red'}}>{errors.password}</span>}
              </div>
              <div>
                <button disabled={isSubmitting} type="submit">Login</button>
                <button disabled={isSubmitting} type="reset">Reset</button>
              </div>
              <div>
                <Link to="/register">don't have accout? Please Register</Link>
              </div>
            </form>
          )}
        </Formik>
      </div>
    );
  }
}

export default Login;
