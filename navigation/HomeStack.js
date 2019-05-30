import React from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Page d'accueil</Text>
      </View>
    );
  }
};

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

export default HomeStack;
