import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const AuthRoute = ({ isLoggedIn, component: Component, ...props }) => (
  <Route
    {...props}
    render={(params) => {
      if (isLoggedIn) {
        return <Component {...params} />;
      }
      return (
        <Redirect to={{
          pathname: '/',
          state: {
            data: params.location.pathname,
          },
        }}
        />
      );
    }}
  />
);

export default AuthRoute;
