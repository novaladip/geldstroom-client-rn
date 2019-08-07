import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';
import { Navigation } from 'react-native-navigation';

interface Props {
  componentId: string;
}

export function FloatingActionButton(props: Props) {
  const { componentId } = props;
  function onPress() {
    Navigation.push(componentId, {
      component: { name: 'AddRecord' },
    });
  }
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>ADD</Text>
    </TouchableOpacity>
  );
}
