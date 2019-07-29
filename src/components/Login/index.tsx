import React from 'react';
import { SafeAreaView, Text, View, TouchableOpacity } from 'react-native';

import { AppRoot } from '../../screen-config/configRoot';
import { TextInput, Button } from '../common';
import { styles } from './styles';
import { Options, Navigation } from 'react-native-navigation';

interface LoginProps {
  componentId: string;
}

interface LoginState {
  emailInput: string;
  passwordInput: string;
}

export class Login extends React.PureComponent<LoginProps, LoginState> {
  passwordInputRef: any = React.createRef();

  static options: Options = {
    topBar: {
      drawBehind: true,
      visible: false,
    },
  };

  constructor(props: LoginProps) {
    super(props);

    this.state = {
      emailInput: '',
      passwordInput: '',
    };
  }

  handleOnChange = (name: string, value: string) => {
    this.setState(current => ({ ...current, [name]: value }));
  };

  onPressLogin = () => {
    AppRoot();
  };

  navigateToRegister = () =>
    Navigation.push(this.props.componentId, {
      component: { name: 'Register' },
    });

  render() {
    const { emailInput, passwordInput } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={[styles.text, styles.title]}>
            "Do not worry if you have built your castles in the air. They are
            where they should be. Now put the foundations under them."
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            value={emailInput}
            label="Email"
            placeholder="Enter email"
            onChangeText={v => this.handleOnChange('emailInput', v)}
            onSubmitEditing={() => this.passwordInputRef.current.focus()}
            blurOnSubmit={false}
            returnKeyType="next"
          />
          <TextInput
            value={passwordInput}
            label="Password"
            placeholder="Enter Password"
            secureTextEntry={true}
            onChangeText={v => this.handleOnChange('passwordInput', v)}
            ref={this.passwordInputRef}
          />
          <View style={styles.registerContainer}>
            <Text style={styles.text}>Doesn't have an account? </Text>
            <TouchableOpacity onPress={this.navigateToRegister}>
              <Text style={[styles.text, styles.textBold]}>Register Here</Text>
            </TouchableOpacity>
          </View>
          <Button
            color="primary"
            text="Login"
            loadingText="Loging In..."
            onPress={this.onPressLogin}
            isLoading={false}
            containerStyle={{ marginTop: 35 }}
          />
        </View>
      </SafeAreaView>
    );
  }
}
