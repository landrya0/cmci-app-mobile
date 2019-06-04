import React from 'react';
import {View, StyleSheet} from 'react-native';
import BannerVideoPlayer from './components/BannerVideoPlayer';
import BannerTitle from './components/BannerTitle';
import PSText from 'cmci-app-mobile/components/PSText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'CMCI PARIS',
  };

  render () {
    return (
      <View style={styles.container}>
        <BannerVideoPlayer />

        <BannerTitle>
          Allez, faites de toutes les nations des disciples, les baptisant au nom du Père, du Fils et du Saint-Esprit
        </BannerTitle>

        <PSText size={18} type={'Regular'}>Matthieu 28:19</PSText>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {},
});
