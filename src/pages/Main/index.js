import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Keyboard, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../../services/api';

import {
  Container,
  Form,
  Input,
  SubmitButton,
  List,
  User,
  Avatar,
  Name,
  Bio,
  ProfileButton,
  ProfileButtonText,
} from './styles';

/**
 * Class representing the Main content
 * @extends React.Component
 */
export default class Main extends Component {
  /** Navigation title */
  static navigationOptions = {
    title: 'Users',
  };

  /** Create the App state. */
  constructor() {
    super();
    this.state = {
      newUser: '',
      users: [],
      loading: false,
    };
  }

  /**
   * Get all users saved on local storage in mobile.
   * @async
   */
  async componentDidMount() {
    const users = await AsyncStorage.getItem('users');

    if (users) {
      this.setState({ users: JSON.parse(users) });
    }
  }

  /**
   * Update the user if it do not exists on localstorage in mobile.
   * @param {object} prevState
   */
  componentDidUpdate(_, prevState) {
    const { users } = this.state;

    if (prevState.users !== users) {
      AsyncStorage.setItem('users', JSON.stringify(users));
    }
  }

  /**
   * Handle add user event.
   * This event call the GitHub API and get the username, login, bio and avatar.
   * All that information are updated in state.
   * The newUser state property will be reset after add the new user
   * And the smartphone keyboard will be dismissed.
   * @function
   * @name handleAddUser
   * @async
   */
  handleAddUser = async () => {
    const { users, newUser } = this.state;
    this.setState({ loading: true });
    const response = await api.get(`/users/${newUser}`);

    const data = {
      name: response.data.name,
      login: response.data.login,
      bio: response.data.bio,
      avatar: response.data.avatar_url,
    };

    this.setState({
      users: [...users, data],
      newUser: '',
      loading: false,
    });

    Keyboard.dismiss();
  };

  /**
   * Handle the navigation to user profile page.
   * @function
   * @name handleNavigate
   * @param {object} user
   */
  handleNavigate = user => {
    const { navigation } = this.props;

    navigation.navigate('Users', { user });
  };

  /** Render the content */
  render() {
    const { users, newUser, loading } = this.state;

    return (
      <Container>
        <Form>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Add user"
            value={newUser}
            onChangeText={text => this.setState({ newUser: text })}
            returnKeyType="send"
            onSubmitEditing={this.handleAddUser}
          />
          <SubmitButton loading={loading} onPress={this.handleAddUser}>
            {loading ? (
              <ActivityIndicator color="#FFF" />
            ) : (
              <Icon name="add" size={20} color="#FFF" />
            )}
          </SubmitButton>
        </Form>
        {/* -- END FORM CONTENT -- */}

        <List
          data={users}
          keyExtractor={user => user.login}
          renderItem={({ item }) => (
            <User>
              <Avatar source={{ uri: item.avatar }} />
              <Name>{item.name}</Name>
              <Bio>{item.bio}</Bio>
              <ProfileButton onPress={() => this.handleNavigate(item)}>
                <ProfileButtonText>See Profile</ProfileButtonText>
              </ProfileButton>
            </User>
          )}
        />
        {/* -- END LIST CONTENT -- */}
      </Container>
    );
  }
}

/**
 * Main propTypes
 * Validate the navigation function.
 * This function are required to call other pages
 */
Main.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
