import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { WebView } from 'react-native-webview';

export default class Repository extends Component {
  /** Navigation title, get the repository name passed as param by other class/screen */
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('repo').name,
  });

  /** Create the Reository state. */
  constructor() {
    super();
    this.state = {
      repository: [],
    };
  }

  /** Call load Repo page */
  componentDidMount() {
    this.setRepoUrl();
  }

  /**
   * This methods set the states repository.
   * @function
   * @name setRepoUrl
   */
  setRepoUrl = () => {
    this.setState({ repository: this.getRepoUrl() });
  };

  /**
   * This methods get repository informations from props
   * And return that information.
   * @function
   * @name getRepoUrl
   */
  getRepoUrl = () => {
    const { navigation } = this.props;

    return navigation.getParam('repo');
  };

  /** Render the content */
  render() {
    const { repository } = this.state;
    return (
      <WebView source={{ uri: repository.html_url }} style={{ flex: 1 }} />
    );
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
