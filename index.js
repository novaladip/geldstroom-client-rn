import { Navigation } from 'react-native-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import { registerScreen } from './src/screen-config/registerScreen';
import { AuthRoot } from './src/screen-config/configRoot';

registerScreen();

Navigation.events().registerAppLaunchedListener(async () => {
  AuthRoot();
  // AppRoot();
});
