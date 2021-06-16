import React from 'react';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';

const wait = (time) => new Promise((resolve) => setTimeout(resolve, 5000));

const Register = () => (
  <div>
    <h1>Register page</h1>
    <Formik
      initialValues={{
        name: '',
        username: '',
        password: '',
        cPassword: '',
      }}
      validate={(values) => {
        const error = {};
        if (!values.name) {
          error.name = 'Please Enter Your Name';
        }
        if (!values.username) {
          error.username = 'Please Enter Your Username';
        }
        if (!values.password) {
          error.password = 'Please Enter Your Password';
        }
        if (!values.cpassword) {
          error.cPassword = 'Please Enter Your Confirm Password';
        } else if(values.password !== values.cPassword) {
          error.cPassword = 'The Confirm Password should be equal to the Password';
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
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" placeholder="Insert your name" value={values.name} onChange={handleChange} onBlur={handleBlur} />
            {touched.name && errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
          </div>
          <div>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" placeholder="Insert your username" value={values.username} onChange={handleChange} onBlur={handleBlur} />
            {touched.username && errors.username && <span style={{ color: 'red' }}>{errors.username}</span>}
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="Insert your password" value={values.password} onChange={handleChange} onBlur={handleBlur} />
            {touched.password && errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
          </div>
          <div>
            <label htmlFor="cPassword">Confirm Password</label>
            <input type="password" name="cPassword" placeholder="Confirm your password" value={values.cpassword} onChange={handleChange} onBlur={handleBlur} />
            {touched.cPassword && errors.cPassword && <span style={{ color: 'red' }}>{errors.cPassword}</span>}
          </div>
          <div>
            <button disabled={isSubmitting} type="submit">Register</button>
          </div>
          <div>
            <Link to="/login">Have an account? Log In</Link>
          </div>
        </form>
      )}
    </Formik>
  </div>
);

export default Register;
