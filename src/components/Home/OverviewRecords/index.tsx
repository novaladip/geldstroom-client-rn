import React from 'react';
import { View, TouchableOpacity, Text, FlatList } from 'react-native';

import { Transaction } from '../../../store/transaction/types';
import { Record, RecordPlaceholder } from '../../common';
import { styles } from './styles';

interface Props {
  transactions: Transaction[];
  isLoading: boolean;
}

export function OverviewRecords(props: Props) {
  const { transactions, isLoading } = props;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Today records overview</Text>
        <TouchableOpacity>
          <Text style={styles.textButton}>Show More</Text>
        </TouchableOpacity>
      </View>
      <RecordPlaceholder isVisible={isLoading} length={10} />
      <FlatList
        keyExtractor={({ id }) => id}
        data={transactions}
        renderItem={({ item }) => <Record transaction={item} />}
      />
    </View>
  );
}
