/**
 * Main app page
 */
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Reactotron from 'reactotron-react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

// Send a reactotron log
Reactotron.log('Reactotron ok');
const App = () => (
  <View style={styles.container}>
    <Text style={styles.welcome}>Welcome to React Native!</Text>
    <Text style={styles.welcome}>Jonas!</Text>
  </View>
);

export default App;
