import React from 'react';
import PSText from 'cmci-app-mobile/components/PSText';
import {StyleSheet} from 'react-native';

export default class BannerTitle extends React.Component {
  render () {
    return (
      <PSText type={'Bold'} size={16} style={styles.bannerTitle}>
        {this.props.children}
      </PSText>
    );
  }
}

const styles = StyleSheet.create ({
  bannerTitle: {
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});
