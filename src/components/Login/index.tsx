import React, { useRef, useState } from 'react';
import { SafeAreaView, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { ApplicationState, ConnectedReduxProps } from '../../store/store';
import { requestLogin } from '../../store/auth/action';
import { AppRoot } from '../../screen-config/configRoot';
import { TextInput, Button } from '../common';
import { styles } from './styles';
import { Options, Navigation } from 'react-native-navigation';
import { AuthState } from '../../store/auth/types';
import { isEmpty } from '../../utils';

type PropsFromState = {
  auth: AuthState;
};

interface PropsFromDispatch {
  requestLogin: typeof requestLogin;
}

type PropsFromComponent = {
  componentId: string;
};

type AllProps = PropsFromState &
  PropsFromDispatch &
  PropsFromComponent &
  ConnectedReduxProps;

function Login(props: AllProps) {
  const { componentId, auth } = props;
  const passwordInputRef = useRef<any>(null);
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  function onPressLogin() {
    props.requestLogin({
      email: emailInput,
      password: passwordInput,
      navigateToHome: AppRoot,
    });
  }

  function navigateToRegister() {
    Navigation.push(componentId, {
      component: { name: 'Register' },
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={[styles.text, styles.title]}>
          "Do not worry if you have built your castles in the air. They are
          where they should be. Now put the foundations under them."
        </Text>
      </View>
      <KeyboardAwareScrollView>
        <View style={styles.inputContainer}>
          <TextInput
            value={emailInput}
            label="Email"
            placeholder="Enter email"
            onChangeText={setEmailInput}
            onSubmitEditing={() => passwordInputRef.current.focus()}
            blurOnSubmit={false}
            returnKeyType="next"
            error={auth.loginError.email}
            useIcon
            iconName="email"
          />
          <TextInput
            value={passwordInput}
            label="Password"
            placeholder="Enter Password"
            secureTextEntry={true}
            onChangeText={setPasswordInput}
            ref={passwordInputRef}
            error={auth.loginError.password || auth.loginError.message}
            onSubmitEditing={() => {
              if (!isEmpty(emailInput) && !isEmpty(passwordInput))
                onPressLogin();
            }}
            useIcon
            iconName="password"
          />
          <View style={styles.registerContainer}>
            <Text style={styles.text}>Doesn't have an account? </Text>
            <TouchableOpacity onPress={navigateToRegister}>
              <Text style={[styles.text, styles.textBold]}>Register Here</Text>
            </TouchableOpacity>
          </View>
          <Button
            color="secondary"
            text="Login"
            loadingText="Loging In..."
            onPress={onPressLogin}
            isLoading={auth.isRequestLoginLoading}
            containerStyle={{ marginTop: 35 }}
          />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

Login.options = {
  topBar: {
    drawBehind: true,
    visible: false,
  },
} as Options;

const mapStateToProps = (state: ApplicationState) => ({
  auth: state.auth,
});

const mapDispacthToProps = {
  requestLogin,
};

export default connect(
  mapStateToProps,
  mapDispacthToProps,
)(Login);
