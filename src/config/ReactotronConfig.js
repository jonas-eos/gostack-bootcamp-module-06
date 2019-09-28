import AsyncStorage from '@react-native-community/async-storage';
import Reactotron from 'reactotron-react-native';

/**
 * Reactotron configuration
 */
Reactotron.setAsyncStorageHandler(AsyncStorage)
  .configure()
  .useReactNative()
  .connect();
