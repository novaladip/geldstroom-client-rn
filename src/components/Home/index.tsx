import React, { Fragment } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { colors } from '../../utils';

export const Home: React.FC<{}> = () => {
  return (
    <Fragment>
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: colors.secondary,
        }}
      >
        <Text>Home Screen</Text>
      </SafeAreaView>
    </Fragment>
  );
};
