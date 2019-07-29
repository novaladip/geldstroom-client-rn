import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { Options } from 'react-native-navigation';

export const Register = () => {
  return (
    <SafeAreaView>
      <Text>Register</Text>
    </SafeAreaView>
  );
};

Register.options = {
  topBar: {
    title: {
      text: 'Register',
    },
  },
  statusBar: {
    visible: false,
    drawBehind: true,
  },
} as Options;
