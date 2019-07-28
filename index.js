import { Navigation } from 'react-native-navigation';
import { registerScreen } from './src/screen-config/registerScreen';
import { AuthRoot, AppRoot } from './src/screen-config/configRoot';

registerScreen();

Navigation.events().registerAppLaunchedListener(() => {
  AuthRoot();
  // AppRoot();
});
