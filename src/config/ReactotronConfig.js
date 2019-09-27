import { AsyncStorage } from 'react-native';
import Reactotron from 'reactotron-react-native';

/**
 * Reactotron configuration
 */
Reactotron.setAsyncStorageHandler(AsyncStorage)
  .configure()
  .useReactNative()
  .connect();
