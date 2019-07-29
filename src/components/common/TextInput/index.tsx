import React, { PureComponent } from 'react';
import {
  TextInput as Input,
  View,
  Text,
  TextInputProps as InputProps,
} from 'react-native';
import { styles } from './styles';
import { colors } from '../../../utils';

export interface TextInputProps extends InputProps {
  label: string;
  placeholder?: string;
  error?: string;
  refs?: any;
}

export class TextInput extends PureComponent<TextInputProps> {
  inputRefs: any;

  focus = () => {
    this.inputRefs.focus();
  };

  render() {
    const { label, placeholder, error, refs } = this.props;
    return (
      <View style={styles.container}>
        <Text style={error ? styles.labelError : styles.label}>{label}</Text>
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
