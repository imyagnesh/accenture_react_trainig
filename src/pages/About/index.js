import React from "react";

const About = (props) => (
  <div>
    About Page
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
