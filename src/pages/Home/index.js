import React from 'react';

const Home = (props) => {
  console.log(props);
  return (
    <div>
      Home Page
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
