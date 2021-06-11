import React from "react";
import ReactDOM from "react-dom";

const App = ({firstName, lastName}) => {
  return (
    <>
      <h1 className="">{firstName}</h1>
      <h2 className="">{lastName}</h2>
    </>
  );
};
ReactDOM.render(<App firstName="Lubos" lastName="Marton" />, 
document.getElementById("root"));
