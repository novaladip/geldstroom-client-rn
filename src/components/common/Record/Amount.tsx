import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { TransactionType } from '../../../store/transaction/types';
import { number } from 'prop-types';

interface Props {
  amount: number;
  type: TransactionType;
}

const styles = StyleSheet.create({
  baseText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  income: {
    color: '#00ff00',
  },
  expense: {
    color: '#ff0000',
  },
});

export function Amount(props: Props) {
  const { amount, type } = props;

  function formatAmount(amount: number, type: TransactionType): string {
    if (type === TransactionType.INCOME) return `+ IDR${formatIDR(amount)}`;
    return `- IDR${formatIDR(amount)}`;
  }

  function formatIDR(amount: number): string {
    return amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  }

  return (
    <Text
      style={[
        styles.baseText,
        type === TransactionType.INCOME ? styles.income : styles.expense,
      ]}
    >
      {formatAmount(amount, type)}
    </Text>
  );
}
