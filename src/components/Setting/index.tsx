import React from 'react';
import { SafeAreaView, Text } from 'react-native';

import { styles } from './styles';
import { ListMenu } from './ListMenu';
import { Options } from 'react-native-navigation';

interface Props {
  componentId: string;
}

export const Setting = (props: Props) => {
  const { componentId } = props;
  return (
    <SafeAreaView style={styles.container}>
      <ListMenu componentId={componentId} />
    </SafeAreaView>
  );
};

Setting.options = {
  topBar: {
    visible: false,
    drawBehind: true,
  },
} as Options;
