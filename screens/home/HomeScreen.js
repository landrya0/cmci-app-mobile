import React from "react";
import { View, Text, Button } from "react-native";
import FadingSlides from 'react-native-fading-slides';

const slides = [
  {
    image: require('../../assets/homeslider/louange.jpg'),
    imageWidth: 100,
    imageHeight: 100,
    title: 'Hello World',
    subtitle: 'This is a beautiful world',
    titleColor: '#fff',
    subtitleColor: '#fff',
  },
  {
    image: require('../../assets/homeslider/bible.jpg'),
    imageWidth: 200,
    imageHeight: 100,
    title: 'Bye World',
    subtitle: 'This is a see you soon',
    titleColor: '#fff',
    subtitleColor: '#fff',
  },
  {
    image: require('../../assets/homeslider/croix.jpg'),
    imageWidth: 200,
    imageHeight: 100,
    title: 'Bye World',
    subtitle: 'This is a see you soon',
    titleColor: '#fff',
    subtitleColor: '#fff',
  }
];

export default class HomeScreen extends React.Component {

  static navigationOptions = {
     title: "CMCI Paris"
   };

  render() {
    return (
      <View>
        <FadingSlides
         slides={slides}
         fadeDuration={1200}
         stillDuration={2000}
         height={500}
         startAnimation={true}
       />
      </View>
    );
  }
};
