import React from 'react';
import { Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';

interface Props {
  icon: number;
  name: string;
  useBorder?: boolean;
  onPress: () => any;
}

export function Item(props: Props) {
  const { icon, name, onPress } = props;
  const useBorder = props.useBorder ? props.useBorder : false;

  return (
    <TouchableOpacity
      style={[styles.container, useBorder && styles.borderBottom]}
      onPress={onPress}
    >
      <Image
        source={icon}
        resizeMethod="auto"
        resizeMode="center"
        style={styles.icon}
      />
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
}
