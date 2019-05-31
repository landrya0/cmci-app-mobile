import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

export default class TabBarIcon extends React.Component {
  render () {
    return (
      <Icon
        name={this.props.name}
        size={26}
        style={{marginBottom: -3}}
        color="#000"
      />
    );
  }
}
