import React from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

class EventsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Liste des evenements</Text>
      </View>
    );
  }
};

const EventsStack = createStackNavigator({
  Events: EventsScreen,
});

export default EventsStack;
