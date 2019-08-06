import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

interface Props {
  componentId: string;
}

export function FloatingActionButton(props: Props) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>+</Text>
    </TouchableOpacity>
  );
}
