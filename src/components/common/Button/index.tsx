import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

export interface ButtonProps {
  text: string;
  onPress: Function;
  isLoading?: boolean;
  loadingText?: string;
  color?: 'primary' | 'secondary';
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
  const {
    text,
    onPress,
    color,
    isLoading,
    loadingText,
    containerStyle,
  } = props;

  const styleContainer =
    color === 'primary' ? styles.primaryContainer : styles.secondaryContainer;

  const styleLoadingText =
    color === 'primary'
      ? styles.textLoadingPrimary
      : styles.textLoadingSecondary;

  const styleText =
    color === 'primary' ? styles.textPrimary : styles.textSecondary;

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styleContainer, containerStyle]}
      onPress={() => onPress()}
    >
      {isLoading ? (
        <Text style={styleLoadingText}>{loadingText}</Text>
      ) : (
        <Text style={styleText}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};

Button.defaultProps = {
  color: 'primary',
};
