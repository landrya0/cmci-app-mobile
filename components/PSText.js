import React from 'react';
import {Font} from 'expo';
import {Text} from 'react-native';

export default class PSText extends React.Component {
  state = {
    fontLoaded: false,
  };

  async componentDidMount () {
    await Font.loadAsync ({
      'ProductSans-Bold': require ('cmci-app-mobile/assets/fonts/ProductSans/ProductSans-Bold.ttf'),
      'ProductSans-Regular': require ('cmci-app-mobile/assets/fonts/ProductSans/ProductSans-Regular.ttf'),
      'ProductSans-Italic': require ('cmci-app-mobile/assets/fonts/ProductSans/ProductSans-Italic.ttf'),
      'ProductSans-BoldItalic': require ('cmci-app-mobile/assets/fonts/ProductSans/ProductSans-BoldItalic.ttf'),
    });

    this.setState ({fontLoaded: true});
  }

  render () {
    let styles = {
      ...this.props.style,
    };

    if (this.state.fontLoaded) {
      styles = {
        ...styles,
        fontSize: this.props.size || 12,
        fontFamily: `ProductSans-${this.props.type || 'Regular'}`,
      };

      return <Text style={styles}>{this.props.children}</Text>;
    }

    return <Text style={styles}>{this.props.children}</Text>;
  }
}
