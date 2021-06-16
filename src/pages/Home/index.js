import React from 'react';
import { Consumer } from '../../context/localeContext';

const Home = (props) => {
  console.log(props);
  return (
    <div>
      Home Page
      <Consumer>
        {
          (value) => {
            return (
              <div>
                <div>
                  <span>{`Current Language ${value.locale}`}</span>
                  <button
                    type="button"
                    onClick={() => {
                      value.changeLocale("fr");
                    }}
                  ></button>
                  </div>
                    <div>
                      <p>{`users length: ${value.users.length}`}</p>
                      {
                        value.users.map(x=><p>{x.name}</p>)
                      }
                      <button
                        type="button"
                        onClick={() => {
                          value.getUsers();
                        }}
                      ></button>
                    </div>
              </div>
            )
          }
        }
      </Consumer>
      <button
        type="button"
        onClick={() => {
          props.history.push('/about');
        }}
      >
        Go To About Page
      </button>
    </div>
  );
};

export default Home;
