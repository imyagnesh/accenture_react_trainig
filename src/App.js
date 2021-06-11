import React from "react";
import style from "./appStyle";

const App = ({firstName, lastName}) => {
    return (
      <>
        <h2 style={style.h2}>{firstName}</h2>
        <h2 style={style.h2}>{lastName}</h2>
      </>
    );
  };
  export default App;