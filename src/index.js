/**
 * Main app page
 */
import React from 'react';
import { StatusBar } from 'react-native';

// import Reactotron from 'reactotron-react-native';
import Routes from './routes';

/**
 * The Main App component.
 * @const App
 * @type {Component}
 * @default
 */
const App = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#E8A87C" />
    <Routes />
  </>
);

export default App;
