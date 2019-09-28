import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import api from '../../services/api';

// import { Container } from './styles';

/**
 * @const User
 * @type {Component}
 * @default
 */
export default class User extends Component {
  /** Navigation title, get the user name passed as param by other class/screen */
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('user').name,
  });

  /** Create the User profiler state. */
  constructor() {
    super();
    this.state = {
      stars: [],
    };
  }

  /**
   * Load all starred repository.
   * The component reads the navigation from props and get the user as param.
   * This user param are loaded from github API, set on ../../services/api
   * As result, the response wait for api return from starred link on api url
   * After receive the response, the stars from the class state are set with
   * the response data informations.
   * @async
   */
  async componentDidMount() {
    const { navigation } = this.props;
    const user = navigation.getParam('user');

    const reponse = await api.get(`/users/${user.login}/starred`);

    this.setState({ stars: reponse.data });
  }

  /** Render the content */
  render() {
    const { stars } = this.state;
    return <View />;
  }
}

/**
 * Main propTypes
 * Validate the navigation function.
 * This function to load params from the props object
 */
User.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
  }).isRequired,
};
