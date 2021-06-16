import React, { Component } from "react";
import { Formik, Form, Field } from "formik";
import fields from "./fields"

export default class Register extends Component {
  render() {
    return (
      <>
        <h1>Register Page</h1>
        <Formik
        initialValues={fields.reduce((p,c) => ({...p, [c.name]: c.value }), {})}
        onSubmit={(values) => {
            console.log(values)
        }}
        >
        {({ values, 
        handleChange, 
        handleBlur, 
        handleSubmit, 
        isSubmitting,
        errors,
        touched
        }) => <Form>
         {fields.map(x => <Field /> key={x.name} {...x})}
        <button  type="submit">Register</button>
        </Form>
        }
          </Formik>
      </>
    );
  }
}
