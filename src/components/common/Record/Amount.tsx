import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { TransactionType } from '../../../store/transaction/types';
import { formatIDR, colors } from '../../../utils';

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
    color: colors.income,
  },
  expense: {
    color: colors.expense,
  },
});

export function Amount(props: Props) {
  const { amount, type } = props;

  function formatAmount(amount: number, type: TransactionType): string {
    if (type === TransactionType.INCOME) return `+ IDR${formatIDR(amount)}`;
    return `- IDR${formatIDR(amount)}`;
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
