import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import {
  Login,
  Register,
  Home,
  Records,
  Setting,
  AddRecord,
} from '../components';
import { store } from '../store/store';

const screens: { name: string; component: any }[] = [
  { name: 'Login', component: Login },
  { name: 'Register', component: Register },
  { name: 'Home', component: Home },
  { name: 'Records', component: Records },
  { name: 'Setting', component: Setting },
  { name: 'AddRecord', component: AddRecord },
];

export function registerScreen() {
  screens.map(({ name, component }) => {
    Navigation.registerComponentWithRedux(
      name,
      () => component,
      Provider,
      store,
    );
  });
}
