import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import Video from 'expo';

export default class BannerVideoPlayer extends React.Component {
  render () {
    return (
      <Video
        source={{
          uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay
        isLooping
        style={{width: 300, height: 300}}
      />
    );
  }
}
