import React from "react";
import { Consumer } from "../../contaxt/localeContext";

const About = (props) => (
  <div>
    About Page
    <Consumer>
      {(value) => {
        return (
          <div>
            <span>{`Current Language: ${value.locale}`}</span>
            {value.users.map((x) => (
              <p>{x.name}</p>
            ))}
          </div>
        );
      }}
    </Consumer>
    <button
      type="button"
      onClick={() => {
        props.history.replace("/contact");
      }}
    >
      Go To Contact Page
    </button>
  </div>
);

export default About;
