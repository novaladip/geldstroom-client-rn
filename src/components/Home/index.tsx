import React, { Fragment } from 'react';
import { SafeAreaView, Text } from 'react-native';

export const Home: React.SFC<{}> = () => {
  return (
    <Fragment>
      <SafeAreaView
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      >
        <Text>Home Screen</Text>
      </SafeAreaView>
    </Fragment>
  );
};
