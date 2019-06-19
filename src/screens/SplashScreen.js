import React, { Component } from "react";
import { View, Image, ImageBackground, Dimensions } from "react-native";
import { SPLASHIMAGE, DICELOGOG } from "../img";
import { Actions } from "react-native-router-flux";

const dimensions = Dimensions.get("window");
const imageHeight = dimensions.height;
const imageWidth = dimensions.width;

class SplashScreen extends Component {
  componentDidMount() {
    setInterval(() => {
      Actions.replace("mobileLoginScreen");
      // Actions.mobileLoginScreen();
    }, 4000);
  }

  render() {
    return (
      <View>
        <ImageBackground
          source={SPLASHIMAGE}
          style={{
            width: imageWidth,
            height: imageHeight,
            position: "absolute",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Image source={DICELOGOG} />
        </ImageBackground>
      </View>
    );
  }
}

export default SplashScreen;
