import React, { Fragment } from 'react';

import { styles } from './styles';
import { Item } from './Item';
import pkg from '../../../../package.json';
import { View } from 'react-native';

interface Props {
  componentId: string;
}

export function ListMenu(props: Props) {
  return (
    <View style={styles.container}>
      <Item
        icon={require('./assets/logout.png')}
        name="Logout"
        onPress={() => {}}
      />
      <Item
        icon={require('./assets/rating.png')}
        name="Give us rate"
        onPress={() => {}}
      />
      <Item
        icon={require('./assets/version.png')}
        name={`Version ${pkg.version}`}
        onPress={() => {}}
      />
    </View>
  );
}
