import React from "react";
import { Consumer } from "../../contaxt/localeContext";

const Home = (props) => {
  console.log("render");
  return (
    <div>
      Home Page
      <Consumer>
        {(value) => {
          console.log("consumer section");
          return (
            <div>
              <div>
                <p>{`Current Language: ${value.locale}`}</p>
                <button
                  type="button"
                  onClick={() => {
                    value.changeLocale("fr");
                  }}
                >
                  Change Locale
                </button>
              </div>
              <div>
                <p>{`users length: ${value.users.length}`}</p>
                {value.users.map((x) => (
                  <p>{x.name}</p>
                ))}
                <button
                  type="button"
                  onClick={() => {
                    value.getUsers();
                  }}
                >
                  Fetch Users
                </button>
              </div>
            </div>
          );
        }}
      </Consumer>
      <button
        type="button"
        onClick={() => {
          props.history.push("/about");
        }}
      >
        Go To About Page
      </button>
    </div>
  );
};

export default Home;
