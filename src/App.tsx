import React from 'react';
import {
  createAppContainer,
  createBottomTabNavigator,
} from 'react-navigation';
import { HomeScreen, AuthScreen } from './screens';

const AppNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Auth: {
      screen: AuthScreen,
    }
  },
  { lazy: true, initialRouteName: 'Auth' },
);

const AppContainer = createAppContainer(AppNavigator);

const App: React.SFC<{}> = () => {
  return <AppContainer />;
};

export default App;
