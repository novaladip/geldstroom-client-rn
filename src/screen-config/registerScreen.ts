import { Navigation } from 'react-native-navigation';

import { Login, Register, Home, Records, Setting } from '../components';

const screens: { name: string; component: any }[] = [
  { name: 'Login', component: Login },
  { name: 'Register', component: Register },
  { name: 'Home', component: Home },
  { name: 'Records', component: Records },
  { name: 'Setting', component: Setting },
];

export function registerScreen() {
  screens.map(screen =>
    Navigation.registerComponent(screen.name, () => screen.component),
  );
}
