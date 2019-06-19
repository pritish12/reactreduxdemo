import {
  OTPNUMBER_CHANGED,
  OTP_NUMBER_LOGIN_USER_SUCCESS,
  OTP_NUMBER_LOGIN_USER_FAIL,
  OTP_NUMBER_LOGIN_USER
} from "./types";
import { Actions } from "react-native-router-flux";
import axios from "axios";

export const otpNumberChanged = text => {
  return {
    type: OTPNUMBER_CHANGED,
    payload: text
  };
};

export const loginUserWithOTP = ({
  otpNumber,
  mobileNumber,
  environment,
  userId,
  type,
  token
}) => {
  return dispatch => {
    dispatch({ type: OTP_NUMBER_LOGIN_USER });

    axios
      .post("myfakeurl", {
        mobile: mobileNumber,
        otp: otpNumber,
        environment: environment,
        userid: userId,
        type: type,
        token: token
      })
      .then(response => {
        loginUserWithOTPSuccess(dispatch, response);
      })
      .catch(error => {
        loginUserWithOTPFail(dispatch, "Something went wrong");
      });
  };
};

const loginUserWithOTPFail = (dispatch, errorMessage) => {
  dispatch({
    type: OTP_NUMBER_LOGIN_USER_FAIL,
    payload: errorMessage
  });
};

const loginUserWithOTPSuccess = (dispatch, response) => {
  dispatch({
    type: OTP_NUMBER_LOGIN_USER_SUCCESS,
    payload: response
  });

  if (response.data.status === 1) {
    //TODO go to main screen
  } else {
    loginUserWithOTPFail(dispatch, response.data.msg);
  }
};
