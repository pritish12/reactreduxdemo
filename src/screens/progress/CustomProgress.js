import React from "react";
import { ActivityIndicator, Modal, View, Text } from "react-native";

const CustomProgressBar = ({ visible }) => (
  <Modal transparent onRequestClose={() => null} visible={visible}>
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <View
        style={{
          borderRadius: 10,
          backgroundColor: "transparent",
          padding: 25
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "200" }}>Loading</Text>
        <ActivityIndicator size="large" />
      </View>
    </View>
  </Modal>
);

export default CustomProgressBar;
