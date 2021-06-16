import React from 'react';
import { Consumer } from '../../context/localeContext';

const About = (props) => (
  <div>
    About Page
    <Consumer>
        {
          (value) => {
            return <span>{`Current Languare: ${value.locale}`}</span>
          }
        }
      </Consumer>
    <button
      type="button"
      onClick={() => {
        props.history.replace('/contact');
      }}
    >
      Go To Contact Page
    </button>
  </div>
);

export default About;
