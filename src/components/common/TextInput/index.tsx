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
  theme?: 'light' | 'dark';
}

export class TextInput extends PureComponent<TextInputProps> {
  inputRefs: any;

  focus = () => {
    this.inputRefs.focus();
  };

  render() {
    const { label, placeholder, error, useIcon, iconName } = this.props;
    const theme = this.props.theme ? this.props.theme : 'light';
    const inputStyle = theme === 'light' ? styles.input : styles.inputDark;
    const labelStyle = theme === 'light' ? styles.label : styles.labelDark;
    const icon = iconName && iconSource[iconName];
    return (
      <View style={styles.container}>
        <Text style={error ? styles.labelError : labelStyle}>{label}</Text>

        {useIcon && (
          <View style={styles.iconContainer}>
            <Image
              source={icon}
              style={error ? styles.iconError : styles.icon}
              resizeMethod="auto"
              resizeMode="center"
            />
          </View>
        )}

        <Input
          placeholder={placeholder}
          style={error ? styles.inputError : inputStyle}
          ref={e => (this.inputRefs = e)}
          {...this.props}
        />
        {error && <Text style={styles.error}>{error}</Text>}
      </View>
    );
  }
}
