import React from "react";
import style from "./appStyle";
import "./styles.css";
import Input from "./components/Input/Input";
import Modal from "./components/Modal/Modal";

const App = ({firstName, lastName}) => {
    return (
      <>
        <h2>{firstName}</h2>
        <h2>{lastName}</h2>
                <Input type="text" placeholder="name" value="Lubos"></Input>
                <Input type="password" value="Marton"></Input>
                <Modal></Modal>
          </>
    );
  };
  export default App;