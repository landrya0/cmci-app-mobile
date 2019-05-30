import React from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

class MinistereScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Notre ministère</Text>
      </View>
    );
  }
};

const MinistereStack = createStackNavigator({
  Ministere: MinistereScreen,
});

export default MinistereStack;
