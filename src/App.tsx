import React from 'react';
import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';
import { Home, Login } from './components';

const AuthStack = createStackNavigator(
  {
    Auth: {
      screen: Login,
    },
  },
  { initialRouteName: 'Auth' },
);

const AppStack = createBottomTabNavigator({
  Home: {
    screen: Home,
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
