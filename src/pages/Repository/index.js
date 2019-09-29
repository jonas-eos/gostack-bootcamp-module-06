import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View } from 'react-native';

export default class Repository extends Component {
  /** Navigation title, get the repository name passed as param by other class/screen */
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('repo').name,
  });

  /** Render the content */
  render() {
    return <View />;
  }
}

/**
 * Repository propTypes
 * Validate the navigation function.
 * This function to load params from the props object
 */
Repository.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
  }).isRequired,
};
