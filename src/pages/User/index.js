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
      page: [],
      refreshing: false,
    };
  }

  /**
   * Call the load event to get all starred from the user selected.
   * @async
   */
  async componentDidMount() {
    this.getStarred();
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
  getStarred = async (page = 1) => {
    const { stars } = this.state;
    const { navigation } = this.props;

    const user = navigation.getParam('user');

    const response = await api.get(`/users/${user.login}/starred`, {
      params: { page },
    });

    this.setState({
      stars: page >= 2 ? [...stars, ...response.data] : response.data,
      page,
      loading: false,
      refreshing: false,
    });
  };

  /**
   * Get new starred from the next page and call the load.
   */
  getNextPage = () => {
    const { page } = this.state;
    const nextPage = page + 1;
    this.getStarred(nextPage);
  };

  /**
   * Refresh class state.
   * This method set refreshing on, and reset stars in state object.
   * As a reload method, this method call getStarred to reload all Starred repo.
   */
  refreshState = () => {
    this.setState({ refreshing: true, stars: [] });
    this.getStarred();
  };

  /**
   * Handle the navigation to repository page.
   * @function
   * @name handleNavigate
   * @param {object} repo
   */
  handleNavigate = repo => {
    const { navigation } = this.props;

    navigation.navigate('Repository', { repo });
  };

  /** Render the content */
  render() {
    const { navigation } = this.props;
    const { stars, loading, refreshing } = this.state;
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
            onEndReachedThreshold={0.2}
            onEndReached={this.getNextPage}
            onRefresh={this.refreshState}
            refreshing={refreshing}
            renderItem={({ item }) => (
              <Starred onPress={() => this.handleNavigate(item)}>
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
 * User propTypes
 * Validate the navigation function.
 * This function are used to load params from the props object
 * and to call other page from the routes.
 */
User.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
    navigate: PropTypes.func,
  }).isRequired,
};
