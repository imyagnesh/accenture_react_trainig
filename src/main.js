import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./LogIn/LogIn";
export default class Main extends Component {
  render() {
    return (
        <Login />
    );
  }
}
