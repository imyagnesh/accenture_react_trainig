import React, { Component } from "react";
import { Formik } from "formik";

const wait = (time) => new Promise(resolve => setTimeout(resolve, 5000));

export default class LogIn extends Component {
  render() {
    return (
      <>
        <h1>Login Page</h1>
        <Formik
          initialValues={{
            name: "",
            username: "",
            password: "",
            confirm_password: "",
          }}
          validate={(values) => {
            const error = {};
            if (!values.name) {
                error.name = "Please Enter Name!";
            }
            if (!values.username) {
              error.username = "Please Enter Username!";
            }
            if (!values.password) {
              error.password = "Please Enter Password!";
            }
            if (!values.confirm_password) {
                error.confirm_password = "Please Confirm Password!";
            }
            if(values.password !== values.confirm_password) {
                error.passMatch = 'Password does NOT match!'
              }
            return error;
          }}
          onSubmit={async (values, actions) => {
            await wait(5000);
            console.log(values);
          }}
        >
        {({ values, 
        handleChange, 
        handleBlur, 
        handleSubmit, 
        isSubmitting,
        errors,
        touched
     }) =>
        <form onSubmit={handleSubmit}>
              <label htmlFor="name">Name:</label>
              <input type="text"
                     name="name" 
                     value={values.name}
                     onChange={handleChange}
                     onBlur={handleBlur} />
              {touched.name && errors.name && <span style={{ color: 'red'}}>{errors.name}</span>}
              <br></br>
              <label htmlFor="username">UserName: </label>
              <input type="text"
                     name = "username" 
                     value={values.username}
                     onChange={handleChange}
                     onBlur={handleBlur} />
              {touched.username && errors.username && <span style={{ color: 'red'}}>{errors.username}</span>}
              <br></br>
              <label htmlFor="password">Password: </label>
              <input type="password" 
                     name="password"
                     value={values.password}
                     onChange={handleChange}
                     onBlur={handleBlur}/>
              {touched.password && errors.password && <span style={{ color: 'red'}}>{errors.password}</span>}
              <br></br>
              <label htmlFor="confirm_password">Confirm your password: </label>
              <input type="password"
                     name="confirm_password"
                     value={values.confirm_password}
                     onChange={handleChange}
                     onBlur={handleBlur} />
              {touched.confirm_password && errors.confirm_password && <span style={{ color: 'red'}}>{errors.confirm_password}</span>}
              <br></br>
              <div>
                {errors.passMatch && <span style={{color: 'red'}}>{errors.passMatch}</span>}
              </div>
              <button disabled={isSubmitting} type="submit">Submit</button>
            </form>
        }
        </Formik>
      </>
    );
  }
}
