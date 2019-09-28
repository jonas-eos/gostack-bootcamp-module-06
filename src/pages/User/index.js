import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import api from '../../services/api';
import {
  Container,
  Header,
  Avatar,
  Name,
  Bio,
  Stars,
  Starred,
  OwnerAvatar,
  Info,
  Title,
  Author,
} from './styles';

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
      loading: false,
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

    this.setState({ loading: true });
    const user = navigation.getParam('user');

    const reponse = await api.get(`/users/${user.login}/starred`);

    this.setState({ stars: reponse.data, loading: false });
  }

  /** Render the content */
  render() {
    const { navigation } = this.props;
    const { stars, loading } = this.state;
    const user = navigation.getParam('user');

    return (
      <Container>
        <Header>
          <Avatar source={{ uri: user.avatar }} />
          <Name>{user.name}</Name>
          <Bio>{user.bio}</Bio>
        </Header>
        {/* End header content */}
        {loading ? (
          <ActivityIndicator color="#e8a87c" />
        ) : (
          <Stars
            data={stars}
            keyExtractor={star => String(star.id)}
            renderItem={({ item }) => (
              <Starred>
                <OwnerAvatar source={{ uri: item.owner.avatar_url }} />
                <Info>
                  <Title>{item.name}</Title>
                  <Author>{item.owner.login}</Author>
                </Info>
              </Starred>
            )}
          />
        )}
        {/* End Stars Content */}
      </Container>
    );
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
