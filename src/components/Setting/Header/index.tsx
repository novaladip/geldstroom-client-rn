import React from 'react';

import { styles } from './styles';
import { View, Text } from 'react-native';

export function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
    </View>
  );
}
