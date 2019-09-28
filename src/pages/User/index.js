import React from 'react';
import { View } from 'react-native';
import Reactotron from 'reactotron-react-native';

// import { Container } from './styles';

/**
 * @const User
 * @type {Component}
 * @default
 */
export default function User(props) {
  Reactotron.log(props);
  return <View />;
}

User.navigationOptions = {
  title: 'Details',
};
// const User = props => <View />;
// export default User;
