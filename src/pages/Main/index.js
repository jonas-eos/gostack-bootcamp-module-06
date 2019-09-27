import React, { Component } from 'react';
import { Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
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
  /** Create the App state. */
  constructor() {
    super();
    this.state = {
      newUser: '',
      users: [],
    };
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
    });

    Keyboard.dismiss();
  };

  /** Render the content */
  render() {
    const { users, newUser } = this.state;

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
          <SubmitButton onPress={this.handleAddUser}>
            <Icon name="add" size={20} color="#FFF" />
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
              <ProfileButton onPress={() => {}}>
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

Main.navigationOptions = {
  title: 'Users',
};
