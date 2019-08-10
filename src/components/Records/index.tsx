import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, View } from 'react-native';
import { useSelector } from 'react-redux';
import moment from 'moment';

import { Record } from '../common/Record';
import { styles } from './styles';
import { ApplicationState } from '../../store/store';
import { RecordPlaceholder, FloatingActionButton } from '../common';
import { Options, Navigation } from 'react-native-navigation';
import { Filter } from './Filter';

interface Props {
  componentId: string;
}

export const Records = (props: Props) => {
  const { componentId } = props;

  const transaction = useSelector(
    (state: ApplicationState) => state.transaction,
  );

  return (
    <SafeAreaView style={styles.container}>
      <Filter componentId={componentId} />
      <RecordPlaceholder length={10} isVisible={transaction.isLoading} />
      <FlatList
        data={transaction.transaction}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => <Record transaction={item} />}
      />
      <FloatingActionButton componentId={componentId} />
    </SafeAreaView>
  );
};

Records.options = {
  topBar: {
    visible: false,
    drawBehind: true,
  },
} as Options;
