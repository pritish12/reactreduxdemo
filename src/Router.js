import React from "react";
import { Scene, Router } from "react-native-router-flux";
import SplashScreen from "./screens/SplashScreen";
import MobileLoginScreen from "./screens/login_screen/MobileLoginScreen";
import OTPLoginScreen from "./screens/login_screen/OTPLoginScreen";

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="splash" component={SplashScreen} hideNavBar initial />
        <Scene key="mobileLoginScreen" component={MobileLoginScreen} />
        <Scene key="otpLoginScreen" component={OTPLoginScreen} />
      </Scene>
      {/* <Scene key="root" hideNavBar>
        <Scene key="splash">
          <Scene
            key="splashScreen"
            component={SplashScreen}
            initial
            hideNavBar
          />
        </Scene>

        <Scene key="login">
          <Scene
            key="mobileLoginScreen"
            component={MobileLoginScreen}
            initial
            hideNavBar
          />
        </Scene>
        <Scene key="otpLoginScreen" component={OTPLoginScreen} />
      </Scene> */}
    </Router>
  );
};

export default RouterComponent;
