import { Navigation } from 'react-native-navigation';

import {
  getJwtToken,
  deleteJwtToken,
  decodeJwt,
  isTokenExpired,
  setDefaultAuthHeader,
} from './src/utils';
import { requestLoginSuccess } from './src/store/auth/action';
import { registerScreen } from './src/screen-config/registerScreen';
import { AuthRoot, AppRoot } from './src/screen-config/configRoot';
import { store } from './src/store/store';

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

  await setDefaultAuthHeader(token);
  store.dispatch(requestLoginSuccess({ user: decoded }));
  AppRoot();
});
