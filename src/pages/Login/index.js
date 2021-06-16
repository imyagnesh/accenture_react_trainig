import React, { Component } from "react";
import { Link } from "react-router-dom";
import MyForm from "../../components/MyForm";
import fields from "./fields";

// eslint-disable-next-line react/prefer-stateless-function
class Login extends Component {
  render() {
    return (
      <div>
        <h1>Login Page</h1>
        <MyForm
          fields={fields}
          onSubmit={async (values, actions) => {
            console.log(actions);
            try {
              const res = await fetch(
                `http://localhost:8080/users?username=${values.username}&password=${values.password}`
              );
              const users = await res.json();
              if (users.length > 0) {
                sessionStorage.setItem("token", JSON.stringify(users[0]));
                this.props.history.push("/home");
              } else {
                actions.setErrors({
                  serverError: "Please Provide correct Credentials",
                });
              }
            } catch (error) {
              actions.setErrors({ serverError: error.message });
            }
          }}
        />
        <Link to="/register">Register</Link>
      </div>
    );
  }
}

export default Login;
