import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';

const wait = (time) => new Promise(resolve => setTimeout(resolve, 5000));
class Register extends Component {
  render() {
    return (
      <div>
        <h1>Register page</h1>
      <Formik initialValues={{
        name: '',
        username: '',
        password: '',
        confirmPassword: '',
      }}
      validate={(values)=> {
        const error = {};
        if(!values.name) {
          error.name = "Please write name !"
        }
        if(!values.username) {
          error.username = "Please write username !"
        }
        if(!values.password) {
          error.password = "Please write password !"
        }
        if(!values.confirmPassword) {
          error.confirmPassword = "Please confirm password !"
        }
        if(values.password != values.confirmPassword) {
          error.submit = "Passwords don't match."
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
          touched,
        }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label>name</label>
              <input type="text" name="name" value={values.name} onChange={handleChange} onBlur={handleBlur} />
              {touched.name && errors.name && <span style={{ color: 'red'}}>{errors.name}</span>}
            </div>
            <div>
              <label>username</label>
              <input type="text" name="username" value={values.username} onChange={handleChange} onBlur={handleBlur} />
              {touched.username && errors.username && <span style={{ color: 'red'}}>{errors.username}</span>}
            </div>
            <div>
              <label>password</label>
              <input type="password" name="password" value={values.password} onChange={handleChange} onBlur={handleBlur} />
              {touched.password && errors.password && <span style={{ color: 'red'}}>{errors.password}</span>}
            </div>
            <div>
              <label>corfirm password</label>
              <input type="password" name="confirmPassword" value={values.confirmPassword} onChange={handleChange} onBlur={handleBlur} />
              {touched.confirmPassword && errors.confirmPassword && <span style={{ color: 'red'}}>{errors.confirmPassword}</span>}
            </div>
            <button disabled={isSubmitting} type="submit" value={values.submit}>Submit</button>
            {touched.submit && errors.submit && <span style={{ color: 'red'}}>{errors.submit}</span>}
          </form>
        )}

      </Formik>
      </div>
    );
  }
}

export default Register;
