import React from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

class AboutScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>A propos de nous</Text>
      </View>
    );
  }
};

const AboutStack = createStackNavigator({
  About: AboutScreen,
});

export default AboutStack;
