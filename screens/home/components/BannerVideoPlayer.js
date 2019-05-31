import React from 'react';
import {Dimensions} from 'react-native';

import {Video} from 'expo';

export default class BannerVideoPlayer extends React.Component {
  render () {
    const {width} = Dimensions.get ('window');
    const localVideoFile = require ('cmci-app-mobile/assets/media/banner.mp4');

    return (
      <Video
        source={localVideoFile}
        rate={1.0}
        isMuted={true}
        resizeMode="cover"
        shouldPlay
        isLooping
        style={{width, height: 228}}
      />
    );
  }
}
