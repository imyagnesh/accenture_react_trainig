/* eslint-disable */
import React from 'react';
import { Formik } from 'formik';

const wait = (time) => new Promise(resolve => setTimeout(resolve, 5000));

const Register = () => (
  <div>
    <h1>Register pae</h1>
    <Formik
          initialValues={{
            username: '',
            password: '',
            repeatPassword: ''
          }}
          validate={(values) => {
            const error = {};
            if(!values.username) {
                error.username = "Please Enter Username"
            }
            if(!values.password) {
              error.password = "Please Enter Password"
          }
          if(!values.repeatPassword) {
            error.repeatPassword = "Please Enter Password"
        }
            if(values.password !== values.repeatPassword) {
                error.password = "Passwords do not match"
                error.repeatPassword = "Passwords do not match"
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
                <label htmlFor="repeatPassword">Repeat password</label>
                <input type="password" name="repeatPassword" value={values.repeatPassword} onChange={handleChange} onBlur={handleBlur} />
                {touched.repeatPassword && errors.repeatPassword && <span style={{ color: 'red'}}>{errors.repeatPassword}</span>}
              </div>
              <div>
                <button disabled={isSubmitting} type="submit">Login</button>
              </div>
            </form>
          )}
        </Formik>
      </div>
);

export default Register;
