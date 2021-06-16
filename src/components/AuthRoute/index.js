import React from "react";
import { Route, Redirect } from "react-router-dom";
import { checkLoggedIn } from "../../utils";

const AuthRoute = ({ component: Component, ...props }) => (
  <Route
    {...props}
    render={(params) => {
      if (checkLoggedIn()) {
        return <Component {...params} />;
      }
      return (
        <Redirect
          to={{
            pathname: "/",
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
