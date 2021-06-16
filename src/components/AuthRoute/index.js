import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const AuthRoute = ({ component: Component, ...props }) => (
  <Route
    {...props}
    render={(params) => {
      if (require('./u')) {
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
