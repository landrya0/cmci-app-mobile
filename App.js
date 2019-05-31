import React from "react";
import { StyleSheet, View } from "react-native";
import AppNavigator from "./navigation/AppNavigator";

export default class App extends Component {
  state = {};

  render () {
    return (
      <View style={styles.container}>
        <AppNavigator />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
