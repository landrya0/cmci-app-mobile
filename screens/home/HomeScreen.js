import React from 'react';
import {View} from 'react-native';

import BannerVideoPlayer from './components/BannerVideoPlayer';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'CMCI Paris',
  };

  render () {
    return (
      <View>
        <BannerVideoPlayer />
      </View>
    );
  }
}
