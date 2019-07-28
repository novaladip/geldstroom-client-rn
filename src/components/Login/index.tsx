import React, { useState, useRef } from 'react';
import { SafeAreaView, Text, View, TextInput as Input } from 'react-native';
import { TextInput, Button } from '../common';
import { styles } from './styles';

export const Login: React.FC<{}> = () => {
  const passwordInputRef = useRef<any>(null);
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  function onPressLogin() {
    // TODO
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={[styles.text, styles.title]}>Geldstroom</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          value={emailInput}
          label="Email"
          placeholder="Enter email"
          onChangeText={setEmailInput}
          onSubmitEditing={() => passwordInputRef.current.focus()}
          blurOnSubmit={false}
          returnKeyType="next"
        />
        <TextInput
          value={passwordInput}
          label="Password"
          placeholder="Enter Password"
          secureTextEntry={true}
          onChangeText={setPasswordInput}
          ref={passwordInputRef}
        />
        <Button
          text="Login"
          loadingText="Loging In..."
          onPress={onPressLogin}
          isLoading={false}
          containerStyle={{ marginTop: 35 }}
        />
      </View>
    </SafeAreaView>
  );
};
