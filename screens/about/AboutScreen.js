import React from "react";
import { View, Text, Button } from "react-native";

export default class AboutScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>A propos de nous</Text>
      </View>
    );
  }
};
