/**
 * @format
 */

import { AppRegistry } from 'react-native';

import App from './src';
import { name as appName } from './app.json';

// Import reactotron config
if (__DEV__) {
  import('./src/config/ReactotronConfig');
}

AppRegistry.registerComponent(appName, () => App);
