import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { formatIDR } from '../../../utils';

interface Props {
  income: number;
  expense: number;
}

export function Balance(props: Props) {
  const { income, expense } = props;
  return (
    <View style={styles.container}>
      <View style={[styles.balance, styles.total]}>
        <Text style={styles.text}>Total: IDR{formatIDR(income - expense)}</Text>
      </View>
      <View style={styles.row}>
        <View style={[styles.balance, styles.expense]}>
          <Text style={[styles.text, styles.textExpense]}>
            - IDR{formatIDR(expense)}
          </Text>
        </View>
        <View style={[styles.balance, styles.income]}>
          <Text style={[styles.text, styles.textIncome]}>
            + IDR{formatIDR(income)}
          </Text>
        </View>
      </View>
    </View>
  );
}
