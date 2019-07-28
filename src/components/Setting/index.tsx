import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { colors } from '../../utils';

export const Setting: React.FC<{}> = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.secondaryDark,
      }}
    >
      <Text>Setting</Text>
    </SafeAreaView>
  );
};
