import React, { useReducer } from "react";
import AlertContext from "./alertContext";
import { v4 as uuidv4 } from "uuid";
import alertReducer from "./alertReducer";
import { SET_ALERT, REMOVE_ALERT } from "../types";

// Initial state
const AlertState = (props) => {
  const initialState = [];

  // State allowing us to access annything in our state
  // dispatch allowing us to dispatch object to reducer
  const [state, dispatch] = useReducer(alertReducer, initialState);

  // Set Alert
  const setAlert = (msg, type, timeout = 5000) => {
    const id = uuidv4();
    dispatch({
      type: SET_ALERT,
      payload: {
        msg,
        type,
        id,
      },
    });
    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
  };

  // returning Provider so that we can wrap our entire application with this context
  // Value contains anything that we want to access from within other components including state and actions
  return (
    <AlertContext.Provider
      value={{
        alerts: state,
        setAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
// Now in order to use this we need to wrap our application in App.js
