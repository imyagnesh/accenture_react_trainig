import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';

class Register extends Component {

render () {
   return (
 <Formik initialValues= {{
   name:"",
   username:"",
   password:"",
   confirmPassword:"",
 }}> 
   {({ values,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                errors,
                touched})=>{
    return <form onSubmit={handleSubmit}>
  <div>
    <label>name</label>
    <input type="text" name="name" value={values.name} onChange={handleChange} onBlur={handleBlur} />
  </div>
  <div>
    <label>username</label>
    <input type="text" name="username" value={values.username} onChange={handleChange} onBlur={handleBlur} />
  </div>
  <div>
    <label>password</label>
    <input type="password" name="password" value={values.password} onChange={handleChange} onBlur={handleBlur} />
  </div>
  <div>
    <label>corfirm password</label>
    <input type="password" name="confirmPassword" value={values.confirmPassword} onChange={handleChange} onBlur={handleBlur} />
  </div>
  <button type="submit">Submit</button>
</form>
   }}

</Formik>
  )
}
}

export default Register;
