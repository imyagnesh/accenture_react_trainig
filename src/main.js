import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./LogIn/LogIn";
import Register from "./Register/Register"
export default class Main extends Component {
  render() {
    return (
        <Register />
    );
  }
}
