import {
  MOBILENUMBER_CHANGED,
  MOBILE_NUMBER_LOGIN_USER_SUCCESS,
  MOBILE_NUMBER_LOGIN_USER_FAIL,
  MOBILE_NUMBER_LOGIN_USER
} from "./types";
import { Actions } from "react-native-router-flux";
import axios from "axios";

export const mobileNumberChanged = text => {
  return {
    type: MOBILENUMBER_CHANGED,
    payload: text
  };
};

export const loginUser = ({ mobileNumber }) => {
  return dispatch => {
    dispatch({ type: MOBILE_NUMBER_LOGIN_USER });

    axios
      .post("myfakeurl", {
        mobile: mobileNumber
      })
      .then(response => {
        loginUserSuccess(dispatch, response);
      })
      .catch(error => {
        loginUserFail(dispatch, "Something went wrong");
      });
  };
};

const loginUserFail = (dispatch, errorMessage) => {
  dispatch({
    type: MOBILE_NUMBER_LOGIN_USER_FAIL,
    payload: errorMessage
  });
};

const loginUserSuccess = (dispatch, response) => {
  dispatch({
    type: MOBILE_NUMBER_LOGIN_USER_SUCCESS,
    payload: response
  });

  if (response.data.status === 1) {
    Actions.otpLoginScreen();

    // console.log(response.data.msg);
  } else {
    // console.log(response.data.msg);
    Actions.otpLoginScreen();

    loginUserFail(dispatch, response.data.msg);
  }
};
