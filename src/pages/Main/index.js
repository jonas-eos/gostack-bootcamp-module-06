import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Reactotron from 'reactotron-react-native';
import { Container, Form, Input, SubmitButton } from './styles';

/**
 * @const Main
 * @type {component}
 * @default
 */
export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      newUser: '',
      users: [],
    };
  }

  handleAddUser = () => {
    const { newUser } = this.state;
    Reactotron.log(`${newUser}`);
  };

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
      </Container>
    );
  }
}

Main.navigationOptions = {
  title: 'Users',
};
