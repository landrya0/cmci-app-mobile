import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

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
          uri: "https://images.pexels.com/photos/2014775/pexels-photo-2014775.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
        },{
          uri: "https://images.pexels.com/photos/1437872/pexels-photo-1437872.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
        },{
          uri: "https://images.pexels.com/photos/70847/cross-sunset-sunrise-hill-70847.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
        }
      ]
    };
  }

  handleSnapToItem(index){
   console.log("snapped to ", index)
 }

  _renderItems( {item, index} ) {
    return (
      <View>
        <Image
          style={{width: '100%', height: 200}}
          source={{uri: item.uri}}
        />
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
