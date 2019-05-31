import React from "react";
import { StyleSheet } from "react-native";

import Icon from 'react-native-vector-icons/Ionicons';
import Ripple from 'react-native-material-ripple';

export default class RippleButton extends React.Component {
  state = {};

  render() {
    return (
      <Ripple style={styles.main}>
        <Icon name={this.props.name} size={30} color={this.props.color}></Icon>
      </Ripple>
    );
  };
};

const styles = StyleSheet.create({
  main: {
    width: 50,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    overflow: 'hidden',
    marginRight: 10,
  }
});
