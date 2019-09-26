import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import User from './pages/User';

/**
 * This is the routes navigator.
 * The navigation use a stack of navigator, that is show on App header
 * The back page menu are disabled
 * @constant Routes
 * @type {object}
 * @default
 */
const Routes = createStackNavigator(
  {
    Home: {
      screen: Main,
    },
    Users: {
      screen: User,
    },
  },
  {
    headerLayoutPreset: 'center',
    headerBackTitleVisible: false,
    defaultNavigationOptions: {
      headerStyle: { backgroundColor: '#E8A87C' },
      headerTintColor: '#FFF',
    },
  }
);

export default createAppContainer(Routes);
