import React from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';

import { styles } from './styles';
import { Item } from './Item';
import pkg from '../../../../package.json';
import { AuthRoot } from '../../../screen-config/configRoot';
import { logoutCurrentUser } from '../../../store/auth/action';
interface Props {
  componentId: string;
}

export function ListMenu(props: Props) {
  const dispatch = useDispatch();

  function logoutUser() {
    dispatch(logoutCurrentUser());
    AuthRoot();
  }

  function handleRate() {
    // @TODO
  }

  return (
    <View style={styles.container}>
      <Item
        icon={require('./assets/logout.png')}
        name="Logout"
        onPress={logoutUser}
      />
      <Item
        icon={require('./assets/rating.png')}
        name="Give us rate"
        onPress={handleRate}
      />
      <Item
        icon={require('./assets/version.png')}
        name={`Version 0.0.1`}
        onPress={() => {}}
      />
    </View>
  );
}
