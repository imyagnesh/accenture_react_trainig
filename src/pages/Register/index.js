/* eslint-disable */
import React, { Component } from 'react';
import { Formik } from 'formik';

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
          <Formik 
          initialValues={{
              name: '',
              username: '',
              password: "",
              confirmPassword: ""
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
          validate={(values) => {
                const errors = {};
                if(!values.name) {
                    errors.name = "Name is mandetory"
                }
                if(!values.username) {
                    errors.username = "Username is mandetory"
                }
                if(!values.password) {
                    errors.password = "Password is mandetory"
                }
                if(!values.confirmPassword) {
                    errors.confirmPassword = "Confirm Password is mandetory"
                } else if(values.password !== values.confirmPassword) {
                    errors.confirmPassword = "Confirm Password Should match with password"
                }
                return errors;
          }}
          >
            {({
                values,
                handleChange,
                setFieldValue,
                handleBlur,
                handleSubmit,
                errors,
                touched,
                isSubmitting
            }) => <form onSubmit={handleSubmit}> 
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" value={values.name} onChange={(event) => {
                        setFieldValue('name',event.target.value.toUpperCase());
                    }} onBlur={handleBlur} />
                    {touched.name && errors.name && <span style={{ color: 'red'}}>{errors.name}</span>}
                </div>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" value={values.username} onChange={handleChange} onBlur={handleBlur} />
                    {touched.username && errors.username && <span style={{ color: 'red'}}>{errors.username}</span>}
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" value={values.password} onChange={handleChange} onBlur={handleBlur} />
                    {touched.password && errors.password && <span style={{ color: 'red'}}>{errors.password}</span>}
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="text" name="confirmPassword" value={values.confirmPassword} onChange={handleChange} onBlur={handleBlur} />
                    {touched.confirmPassword && errors.confirmPassword && <span style={{ color: 'red'}}>{errors.confirmPassword}</span>}
                </div>
                <button type="submit">Register</button>
            </form>
            }
          
          </Formik>
      </div>
    );
  }
}

export default Register;
