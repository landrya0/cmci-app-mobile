import React from "react";
import { StyleSheet, View, Text } from "react-native";

import Carousel from 'react-native-snap-carousel';

export default class Diaporama extends React.Component {

  constructor(props){
    super();
    this.state = {
      errors: []
    }
    this.props = props;
    this._carousel = {};
    this.init();
  }

  init(){
    this.state = {
      images: [
        {
          id: "WpIAc9by5iU",
          thumbnail: "https://img.youtube.com/vi/D9ioyEvdggk/hqdefault.jpg",
          title: "Led Zeppelin - Stairway To Heaven"
        }, {
          id: "sNPnbI1arSE",
          thumbnail: "https://img.youtube.com/vi/sNPnbI1arSE/hqdefault.jpg",
          title: "Eminem - My Name Is"
        }, {
          id: "VOgFZfRVaww",
          thumbnail: "https://img.youtube.com/vi/VOgFZfRVaww/hqdefault.jpg",
          title: ""
        }
      ]
    };

    //console.log("ThumbnailCarousel Props: ", this.props)
  }

  handleSnapToItem(index){
   console.log("snapped to ", index)
 }

  _renderItems({item, index}) {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{ item.title }</Text>
      </View>
    );
  }
  
  render () {
    return (
        <Carousel
          ref={(c) => {this._carousel = c; }}
          data={this.state.images}
          renderItem={this._renderItems}
          onSnapToItem={this.handleSnapToItem.bind(this)}
          sliderWidth={360}
          itemWidth={256}
          layout={'default'}
          firstItem={0}
          windowSize={1}
        />
      );
  }
}

const styles = StyleSheet.create({
    container: {
     flex: 1,
     backgroundColor: '#fff',
     alignItems: 'center',
     justifyContent: 'center',
  }});
