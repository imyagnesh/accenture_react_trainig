import React from "react";
import style from "./appStyle";
import "./style.css";

const App = ({ name, caption }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{caption}</h2>
    </div>
  );
};

export default App;
