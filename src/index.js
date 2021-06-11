import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <>
    <App firstName="Lubos" lastName="Marton" />
    <App firstName="rohit" lastName="sharma" />
    <App firstName="virat" lastName="kohli" />
  </>,
  document.getElementById("root")
);