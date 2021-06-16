import React, { Component, createRef } from 'react';
import MyForm from '../../components/MyForm';
import fields from './fields';

class Register extends Component {
  render () {
    return (
        <div>
          <h1>Register page</h1>
          <MyForm fields={fields} onSubmit={async (values) => {
            console.log(values);
            await fetch('http://localhost:8080/users', {
              method: 'POST',
              body: JSON.stringify(values),
              headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              }
            })
            this.props.history.push('/');
          }}/>
        </div>
    );
  }
}

export default Register;
