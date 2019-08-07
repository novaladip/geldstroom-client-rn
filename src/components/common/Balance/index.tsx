import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styles';
import { formatIDR } from '../../../utils';
import { BalanceState } from '../../../store/transaction/types';

interface Props {
  balance: BalanceState;
}

export function Balance(props: Props) {
  const { income, expense } = props.balance;
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Today transactions overview</Text>
      </View>
      <View style={[styles.balance, styles.income, styles.borderBottom]}>
        <Image
          source={require('./assets/income.png')}
          resizeMethod="auto"
          resizeMode="center"
          style={styles.icon}
        />
        <Text style={[styles.text, styles.textIncome]}>
          IDR{formatIDR(income)}
        </Text>
      </View>

      <View style={[styles.balance, styles.expense, styles.borderBottom]}>
        <Image
          source={require('./assets/expense.png')}
          resizeMethod="auto"
          resizeMode="center"
          style={styles.icon}
        />
        <Text style={[styles.text, styles.textExpense]}>
          IDR{formatIDR(expense)}
        </Text>
      </View>
      <View style={[styles.balance, styles.total]}>
        <Image
          source={require('./assets/total.png')}
          resizeMethod="auto"
          resizeMode="center"
          style={styles.icon}
        />
        <Text style={styles.text}>IDR{formatIDR(income - expense)}</Text>
      </View>
    </View>
  );
}
