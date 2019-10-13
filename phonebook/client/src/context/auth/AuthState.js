import React, { useReducer } from "react";
import uuid from "uuid";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import { REGSTER_SUCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, CLEAR_ERRORS } from "../types";

const AuthState = props => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: null,
    error: null
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  //setState
  const AuthState = props => {
    const inititalState = {
      token: localStorage.getItem("token"),
      isAuthenticated: null,
      loading: null,
      user: null,
      error: null
    };
  };

  //Load User from payload

  //Register User and get Token

  //Login User and get token

  //Logout and destroy token

  //Clear Errors

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
