import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  Dimensions,
  TouchableHighlight,
  ActivityIndicator,
  Alert,
  Modal
} from "react-native";
import { SPLASHIMAGE, DICELOGOG, SUBMIT_MOBILE_NUMBER } from "../../img";
import SmoothPinCodeInput from "react-native-smooth-pincode-input";
import { connect } from "react-redux";
import { otpNumberChanged, loginUserWithOTP } from "../../actions";
import CustomProgressBar from "../progress/CustomProgress";

const dimensions = Dimensions.get("window");
const imageHeight = dimensions.height;
const imageWidth = dimensions.width;

class OTPLoginScreen extends Component {
  onOTPNumberChange(text) {
    this.props.otpNumberChanged(text);
  }

  onOTPNumberSubmit() {
    const { otpNumber, mobileNumber, userId } = this.props;
    const environment = 1;
    const type = 1;
    const token = "";
    //TODO
    this.props.loginUserWithOTP({
      otpNumber,
      mobileNumber,
      environment,
      userId,
      type,
      token
    });
  }

  renderError() {
    if (!this.alertPresent) {
      this.alertPresent = true;
      if (this.props.error) {
        Alert.alert(`${this.props.error}`);
        console.log(this.props.error);
        // this.showAlert();
      } else {
        this.alertPresent = false;
      }
    }
  }

  render() {
    return (
      <View>
        <Text>OTP Screen</Text>
      </View>
    );
  }

  // render() {
  //   return (
  //     <View>
  //       <ImageBackground
  //         source={SPLASHIMAGE}
  //         style={{
  //           width: imageWidth,
  //           height: imageHeight
  //         }}
  //       >
  //         <View
  //           style={{
  //             backgroundColor: "#FFFFFF",
  //             height: 60,
  //             width: imageWidth,
  //             position: "absolute",
  //             justifyContent: "center",
  //             alignItems: "center"
  //           }}
  //         >
  //           <Image
  //             source={DICELOGOG}
  //             style={{
  //               // width: 60,
  //               // height: 60,
  //               resizeMode: "center"
  //             }}
  //           />
  //         </View>

  //         <View
  //           style={{
  //             justifyContent: "center",
  //             alignItems: "center"
  //           }}
  //         >
  //           <Text
  //             style={{
  //               marginTop: 80,
  //               color: "#FFFFFF",
  //               fontSize: 22,
  //               fontFamily: "barlow-medium"
  //             }}
  //           >
  //             Login with
  //           </Text>
  //           <Text
  //             style={{
  //               paddingTop: 10,
  //               color: "#FFFFFF",
  //               fontSize: 25,
  //               fontFamily: "barlow-bold"
  //             }}
  //           >
  //             Mobile Number
  //           </Text>
  //           <Text
  //             style={{
  //               paddingTop: 25,
  //               marginBottom: 25,
  //               color: "#FFFFFF",
  //               fontSize: 22,
  //               fontFamily: "barlow-medium"
  //             }}
  //           >
  //             Enter 4 digit OTP
  //           </Text>

  //           <SmoothPinCodeInput
  //             cellSize={30}
  //             codeLength={4}
  //             value={this.props.otpNumber}
  //             onTextChange={this.onOTPNumberChange.bind(this)}
  //             cellStyle={{
  //               borderWidth: 2,
  //               borderColor: "white"
  //             }}
  //             cellStyleFocused={{
  //               borderColor: "black"
  //             }}
  //             textStyle={{
  //               fontSize: 24,
  //               color: "white"
  //             }}
  //             textStyleFocused={{
  //               color: "white"
  //             }}
  //           />

  //           <TouchableHighlight
  //             onPress={this.onOTPNumberSubmit.bind(this)}
  //             style={{ marginTop: 25 }}
  //           >
  //             <Image
  //               source={SUBMIT_MOBILE_NUMBER}
  //               style={{
  //                 paddingTop: 25,
  //                 width: 30,
  //                 height: 30
  //               }}
  //             />
  //           </TouchableHighlight>
  //         </View>
  //         {this.renderError()}
  //         {<CustomProgressBar visible={this.props.loading} />}
  //       </ImageBackground>
  //     </View>
  //   );
  // }
}

const mapStateToProps = state => {
  return {
    otpNumber: state.otpNumberAuth.otpNumber,
    error: state.otpNumberAuth.error,
    loading: state.otpNumberAuth.loading
  };
};

export default connect(
  mapStateToProps,
  {
    otpNumberChanged,
    loginUserWithOTP
  }
)(OTPLoginScreen);
