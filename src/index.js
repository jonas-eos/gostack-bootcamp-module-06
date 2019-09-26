/**
 * Main app page
 */
import React from 'react';
import { StatusBar } from 'react-native';

// import Reactotron from 'reactotron-react-native';
import Routes from './routes';

// Send a reactotron log
const App = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#E8A87C" />
    <Routes />
  </>
);

export default App;
