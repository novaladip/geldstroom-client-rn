import React from 'react';
import { View, TouchableOpacity, Text, ScrollView } from 'react-native';

import { Transaction } from '../../../store/transaction/types';
import { Record } from '../../common';
import { styles } from './styles';

interface Props {
  transactions: Transaction[];
  selectedDate: string;
}

export function OverviewRecords(props: Props) {
  const { transactions, selectedDate } = props;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{selectedDate} records overview</Text>
        <TouchableOpacity>
          <Text style={styles.textButton}>Show More</Text>
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {transactions.map(transaction => (
          <Record transaction={transaction} key={transaction.id} />
        ))}
      </ScrollView>
    </View>
  );
}