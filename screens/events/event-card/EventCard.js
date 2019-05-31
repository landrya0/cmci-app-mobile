import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import DefaultStyles from './../../../constants/styles';
import PSText from './../../../components/PSText';
import RippleButton from './../../../components/RippleButton';

export default class EventCard extends React.Component {
  state = {
  };

  render() {
    return (
      <View style={styles.card}>
        <Image source={{uri : this.props.data.imgUri}} style={styles.image} />
        <View style={styles.cardBody}>
          <PSText type='Italic' style={styles.subtitle}>{this.props.data.datetime + '  -  ' + this.props.data.town}</PSText>
          <PSText type='Bold' style={styles.title}>{this.props.data.title}</PSText>
        </View>
        <View style={styles.cardActionBar}>
          <View style={styles.cardLeftActions}>
            <RippleButton name="ios-add-circle" color='#424242'></RippleButton>
            <RippleButton name="ios-share" color='#424242'></RippleButton>
          </View>
          <View style={styles.cardRightActions}>
            <RippleButton name="ios-navigate" color='#424242'></RippleButton>
          </View>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  card: {
    shadowColor: "#000",
    shadowOffset: {
    	width: 0,
    	height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    backgroundColor: '#FFF',
    marginBottom: 25,
    borderRadius: 3,
  },
  cardBody: {
    padding: 15,
  },
  cardActionBar: {
    paddingTop: 8,
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 8,
    backgroundColor: '#FAFAFA',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardLeftActions: {
    display: 'flex',
    flexDirection: 'row',
  },
  cardRightActions: {
  },
  image: {
    width: '100%',
    height: 130,
  },
  subtitle: {
    fontStyle: 'italic',
    color: '#9E9E9E',
  },
  title: {
    fontSize: 22,
  },
});
