import React from "react";
import { Font } from 'expo';
import { View, Text, StyleSheet } from "react-native";

export default class PSText extends React.Component {
  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      'ProductSans-Bold': require('./../assets/fonts/ProductSans/ProductSans-Bold.ttf'),
      'ProductSans-Regular': require('./../assets/fonts/ProductSans/ProductSans-Regular.ttf'),
      'ProductSans-Italic': require('./../assets/fonts/ProductSans/ProductSans-Italic.ttf'),
      'ProductSans-BoldItalic': require('./../assets/fonts/ProductSans/ProductSans-BoldItalic.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    let styles = {
      ...this.props.style,
    }

    if (this.state.fontLoaded) {
      styles = {
        ...styles,
        fontFamily: `ProductSans-${this.props.type}`,
      }

      return <Text style={styles}>{this.props.children}</Text>;
    }

    return <Text style={styles}>{this.props.children}</Text>;
  }
};
