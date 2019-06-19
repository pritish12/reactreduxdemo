import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Router from "./src/Router";
import * as Font from "expo-font";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./src/reducers";
import ReduxThunk from "redux-thunk";

export default class App extends React.Component {
  componentDidMount() {
    Font.loadAsync({
      "barlow-bold": require("./assets/fonts/barlow_bold.ttf"),
      "barlow-medium": require("./assets/fonts/barlow_medium.ttf")
    });
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Router />
      </Provider>
    );
  }
}
