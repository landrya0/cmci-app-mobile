import React from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

class LitteratureScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Notre litterature</Text>
      </View>
    );
  }
};

const LitteratureStack = createStackNavigator({
  Litterature: LitteratureScreen,
});

export default LitteratureStack;
