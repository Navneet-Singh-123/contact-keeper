import React, { useReducer } from "react";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
} from "../types";

// Initial state
const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    error: null,
    user: null,
  };

  // State allowing us to access annything in our state
  // dispatch allowing us to dispatch object to reducer
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Load user

  // Register user

  // Login user

  // Logout user

  // Clear errors

  // returning Provider so that we can wrap our entire application with this context
  // Value contains anything that we want to access from within other components including state and actions
  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
// Now in order to use this we need to wrap our application in App.js
