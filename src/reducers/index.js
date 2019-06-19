import { combineReducers } from "redux";
import MobileNumberLoginReducer from "./MobileNumberLoginReducer";
import OTPNumberLoginReducer from "./OTPNumberLoginReducer";

export default combineReducers({
  mobileNumberAuth: MobileNumberLoginReducer,
  otpNumberAuth: OTPNumberLoginReducer
});
