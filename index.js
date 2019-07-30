import { Navigation } from 'react-native-navigation';

import {
  getJwtToken,
  deleteJwtToken,
  decodeJwt,
  isTokenExpired,
  setDefaultAuthHeader,
} from './src/utils';
import { registerScreen } from './src/screen-config/registerScreen';
import { AuthRoot, AppRoot } from './src/screen-config/configRoot';

registerScreen();

Navigation.events().registerAppLaunchedListener(async () => {
  const token = await getJwtToken();

  if (!token) {
    return AuthRoot();
  }
  const decoded = decodeJwt(token);
  const isExpired = isTokenExpired(decoded.exp);

  if (isExpired) {
    await deleteJwtToken();
    return AuthRoot();
  }

  setDefaultAuthHeader();
  AppRoot();
});
