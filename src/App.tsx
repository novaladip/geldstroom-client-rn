import React from 'react';
import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator,
  createDrawerNavigator,
} from 'react-navigation';
import { Home, Records, Setting, Login, Register } from './components';
import { colors } from './utils';

const AuthStack = createStackNavigator(
  {
    Login: {
      screen: Login,
    },
    Register: {
      screen: Register,
    },
  },
  { initialRouteName: 'Login' },
);

const AppStack = createDrawerNavigator({
  Home: {
    screen: Home,
  },
  Records: {
    screen: Records,
  },
  Setting: {
    screen: Setting,
  },
});

const AppNavigator = createSwitchNavigator({
  Auth: AuthStack,
  App: AppStack,
});

const AppContainer = createAppContainer(AppNavigator);

const App: React.FC<{}> = () => {
  return <AppContainer />;
};

export default App;
