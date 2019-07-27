import React from 'react';
import {
  createAppContainer,
  createBottomTabNavigator,
} from 'react-navigation';
import { HomeScreen } from './screens';

const AppNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Settings: {
      screen: HomeScreen,
    },
  },
  { lazy: true },
);

const AppContainer = createAppContainer(AppNavigator);

const App: React.SFC<{}> = () => {
  return <AppContainer />;
};

export default App;
