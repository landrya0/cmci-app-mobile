import React from "react";
import { View, Text, Button } from "react-native";

import Diaporama from './components/Diaporama';

export default class HomeScreen extends React.Component {

  static navigationOptions = {
     title: "CMCI Paris"
   };

  render() {
    return (
      <View>
        <Diaporama/>

      </View>
    );
  }
};
