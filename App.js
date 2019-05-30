import React from "react";
import { View, Text } from "react-native";
import AppNavigator from './navigation/AppNavigator'

export default class App extends React.Component {
  state = {};

  render () {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <AppNavigator/>
      </View>
    );
  }
};
