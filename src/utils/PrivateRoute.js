import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const authData = useSelector((state) => state.auth);

  return (
    <Route
      {...rest}
      render={(props) =>
        authData.userId !== "" ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/auth/signin",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
