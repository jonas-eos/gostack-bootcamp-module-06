import React, { Component } from 'react';

import { View } from 'react-native';

export default class Repository extends Component {
  /** Navigation title, get the user name passed as param by other class/screen */
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('repo').name,
  });

  render() {
    return <View />;
  }
}
