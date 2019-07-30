import React, { PureComponent } from 'react';
import {
  TextInput as Input,
  View,
  Text,
  TextInputProps as InputProps,
  Image,
} from 'react-native';
import { styles } from './styles';
import { colors } from '../../../utils';

export const iconSource = {
  email: require('./assets/email.png'),
  password: require('./assets/lock.png'),
};

export interface TextInputProps extends InputProps {
  label: string;
  placeholder?: string;
  error?: string;
  refs?: any;
  useIcon?: boolean;
  iconName?: 'email' | 'password';
}

export class TextInput extends PureComponent<TextInputProps> {
  inputRefs: any;

  focus = () => {
    this.inputRefs.focus();
  };

  render() {
    const { label, placeholder, error, useIcon, iconName } = this.props;
    const icon = iconName && iconSource[iconName];
    return (
      <View style={styles.container}>
        <Text style={error ? styles.labelError : styles.label}>{label}</Text>

        {useIcon && (
          <View style={styles.iconContainer}>
            <Image
              source={icon}
              style={styles.icon}
              resizeMethod="auto"
              resizeMode="center"
            />
          </View>
        )}

        <Input
          placeholder={placeholder}
          style={error ? styles.inputError : styles.input}
          placeholderTextColor={colors.primaryLight}
          ref={e => (this.inputRefs = e)}
          {...this.props}
        />
        {error && <Text style={styles.error}>{error}</Text>}
      </View>
    );
  }
}
