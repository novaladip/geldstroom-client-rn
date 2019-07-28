import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

export interface ButtonProps {
  text: string;
  onPress: Function;
  isLoading?: boolean;
  loadingText?: string;
  containerStyle?: {
    marginTop?: number;
    marginRight?: number;
    marginBottom?: number;
    marginLeft?: number;
    marginVertical?: number;
    marginHorizontal?: number;
  };
}

export const Button: React.FC<ButtonProps> = props => {
  const { text, onPress, isLoading, loadingText, containerStyle } = props;
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.container, containerStyle]}
      onPress={() => onPress()}
    >
      {isLoading ? (
        <Text style={styles.textLoading}>{loadingText}</Text>
      ) : (
        <Text style={styles.text}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};
