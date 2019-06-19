import {
  MOBILENUMBER_CHANGED,
  MOBILE_NUMBER_LOGIN_USER_SUCCESS,
  MOBILE_NUMBER_LOGIN_USER_FAIL,
  MOBILE_NUMBER_LOGIN_USER
} from "../actions/types";

const INITIAL_STATE = {
  mobileNumber: "",
  response: null,
  error: "",
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MOBILENUMBER_CHANGED:
      return { ...state, mobileNumber: action.payload };
    case MOBILE_NUMBER_LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        error: "",
        loading: false,
        mobileNumber: ""
      };
    case MOBILE_NUMBER_LOGIN_USER_FAIL:
      return { ...state, error: action.payload, loading: false };
    case MOBILE_NUMBER_LOGIN_USER:
      return { ...state, loading: true, error: "" };
    default:
      return state;
  }
};
