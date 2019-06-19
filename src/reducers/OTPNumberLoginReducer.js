import {
  OTPNUMBER_CHANGED,
  OTP_NUMBER_LOGIN_USER_SUCCESS,
  OTP_NUMBER_LOGIN_USER_FAIL,
  OTP_NUMBER_LOGIN_USER
} from "../actions/types";

const INITIAL_STATE = {
  otpNumber: "",
  response: null,
  error: "",
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OTPNUMBER_CHANGED:
      return { ...state, otpNumber: action.payload };
    case OTP_NUMBER_LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        error: "",
        loading: false,
        otpNumber: ""
      };
    case OTP_NUMBER_LOGIN_USER_FAIL:
      return { ...state, error: action.payload, loading: false };
    case OTP_NUMBER_LOGIN_USER:
      return { ...state, loading: true, error: "" };
    default:
      return state;
  }
};
