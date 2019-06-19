import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  Dimensions,
  TouchableHighlight,
  Alert
} from "react-native";
import { SPLASHIMAGE, DICELOGOG, SUBMIT_MOBILE_NUMBER } from "../../img";
import SmoothPinCodeInput from "react-native-smooth-pincode-input";
import { connect } from "react-redux";
import { mobileNumberChanged, loginUser } from "../../actions";
import CustomProgressBar from "../progress/CustomProgress";

const dimensions = Dimensions.get("window");
const imageHeight = dimensions.height;
const imageWidth = dimensions.width;

class MobileLoginScreen extends Component {
  onMobileNumberChange(text) {
    this.props.mobileNumberChanged(text);
    console.log(text);
  }

  onMobileNumberSubmit() {
    const { mobileNumber } = this.props;
    this.props.loginUser({ mobileNumber });
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
        <ImageBackground
          source={SPLASHIMAGE}
          style={{
            width: imageWidth,
            height: imageHeight
          }}
        >
          <View
            style={{
              backgroundColor: "#FFFFFF",
              height: 60,
              width: imageWidth,
              position: "absolute",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Image
              source={DICELOGOG}
              style={{
                // width: 60,
                // height: 60,
                resizeMode: "center"
              }}
            />
          </View>

          <View
            style={{
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text
              style={{
                paddingTop: 80,
                color: "#FFFFFF",
                fontSize: 22,
                fontFamily: "barlow-medium"
              }}
            >
              Login with
            </Text>

            <Text
              style={{
                paddingTop: 10,
                color: "#FFFFFF",
                fontSize: 25,
                fontFamily: "barlow-bold"
              }}
            >
              Mobile Number
            </Text>
            <Text
              style={{
                paddingTop: 25,
                marginBottom: 25,
                color: "#FFFFFF",
                fontSize: 22,
                fontFamily: "barlow-medium"
              }}
            >
              10 digit Mobile Number
            </Text>

            <SmoothPinCodeInput
              cellSize={30}
              codeLength={10}
              value={this.props.mobileNumber}
              onTextChange={this.onMobileNumberChange.bind(this)}
              cellStyle={{
                borderWidth: 2,
                // borderRadius: 24,

                borderColor: "white"
                // backgroundColor: "azure"
              }}
              cellStyleFocused={{
                borderColor: "black"
              }}
              textStyle={{
                fontSize: 24,
                color: "white"
              }}
              textStyleFocused={{
                color: "white"
              }}
            />

            <TouchableHighlight
              onPress={this.onMobileNumberSubmit.bind(this)}
              style={{ marginTop: 25 }}
            >
              <Image
                source={SUBMIT_MOBILE_NUMBER}
                style={{
                  paddingTop: 25,
                  width: 30,
                  height: 30
                }}
              />
            </TouchableHighlight>
          </View>
          {this.renderError()}
          {<CustomProgressBar visible={this.props.loading} />}
        </ImageBackground>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    mobileNumber: state.mobileNumberAuth.mobileNumber,
    error: state.mobileNumberAuth.error,
    loading: state.mobileNumberAuth.loading
  };
};

export default connect(
  mapStateToProps,
  {
    mobileNumberChanged,
    loginUser
  }
)(MobileLoginScreen);
