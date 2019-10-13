import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, loading } = authContext;

  //check to see if valid user, redirects unauth users  to login page, pass data if auth user
  return <Route {...rest} render={props => (!isAuthenticated && !loading ? <Redirect to="login" /> : <Component {...props} />)} />;
};

export default PrivateRoute;
