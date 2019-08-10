import React, { useState, useRef } from 'react';
import { View, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { connect } from 'react-redux';
import { Options, Navigation } from 'react-native-navigation';

import { ApplicationState, ConnectedReduxProps } from '../../store/store';
import { requestRegister } from '../../store/auth/action';
import { TextInput, Button } from '../common';
import { styles } from './styles';

export type Props = {
  componentId: string;
};
export type PropsFromState = {
  isRequestRegisterLoading: boolean;
  registerError: any;
};
export interface PropsFromDispatch {
  requestRegister: typeof requestRegister;
}

export type AllProps = Props &
  PropsFromState &
  PropsFromDispatch &
  ConnectedReduxProps;

function Register(props: AllProps) {
  const passwordInputRef = useRef<any>(null);
  const passwordComfirmationInputRef = useRef<any>(null);

  const {
    componentId,
    requestRegister,
    registerError,
    isRequestRegisterLoading,
  } = props;
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [passwordComfirmationInput, setPasswordComfirmationInput] = useState(
    '',
  );

  function onPressRegister() {
    requestRegister({
      email: emailInput,
      password: passwordInput,
      passwordComfirmation: passwordComfirmationInput,
      popScreen: popScreen,
    });
  }

  function popScreen() {
    Navigation.pop(componentId);
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView>
        <View style={styles.inputContainer}>
          <TextInput
            value={emailInput}
            label="Email"
            placeholder="Enter Email"
            onChangeText={setEmailInput}
            useIcon
            iconName="email"
            error={registerError.email || registerError.message}
            onSubmitEditing={() => passwordInputRef.current.focus()}
            blurOnSubmit={false}
          />

          <TextInput
            value={passwordInput}
            label="Password"
            placeholder="Enter Password"
            onChangeText={setPasswordInput}
            secureTextEntry
            useIcon
            iconName="password"
            error={registerError.password}
            ref={passwordInputRef}
            onSubmitEditing={() => passwordComfirmationInputRef.current.focus()}
            blurOnSubmit={false}
          />

          <TextInput
            value={passwordComfirmationInput}
            label="Password Comfirmation"
            placeholder="Enter Password Comfirmation"
            onChangeText={setPasswordComfirmationInput}
            secureTextEntry
            useIcon
            iconName="password"
            error={registerError.passwordComfirmation}
            ref={passwordComfirmationInputRef}
            onSubmitEditing={onPressRegister}
          />

          <View style={styles.loginContainer}>
            <Text style={styles.text}>Already have an account? </Text>
            <TouchableOpacity onPress={popScreen}>
              <Text style={[styles.text, styles.textBold]}>Login Here</Text>
            </TouchableOpacity>
          </View>
          <Button
            color="secondary"
            text="Register"
            loadingText="Registering..."
            onPress={onPressRegister}
            containerStyle={{ marginTop: 35 }}
            isLoading={isRequestRegisterLoading}
          />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

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

const mapDispatchToProps = {
  requestRegister,
};

const mapStateToProps = (state: ApplicationState) => ({
  isRequestRegisterLoading: state.auth.isRequestRegisterLoading,
  registerError: state.auth.registerError,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Register);
