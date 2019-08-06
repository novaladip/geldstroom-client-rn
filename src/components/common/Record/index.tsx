import React from 'react';
import { View, Text } from 'react-native';
import moment from 'moment';

import { Transaction } from '../../../store/transaction/types';
import { styles } from './styles';
import { Amount } from './Amount';
import { CategoryIcon } from './CategoryIcon';

interface Props {
  transaction: Transaction;
}

export function Record(props: Props) {
  const { transaction } = props;
  const createdAt = moment.utc(transaction.createdAt).format('MM-DD-YYYY');

  return (
    <View style={styles.container}>
      <View style={styles.itemLeft}>
        <CategoryIcon category={transaction.category} />
        <Text style={[styles.textLarge, styles.text]}>
          {transaction.category}
        </Text>
      </View>
      <View style={styles.item}>
        <Amount amount={transaction.amount} type={transaction.type} />
        <Text style={[styles.textSmall, styles.text, styles.textRight]}>
          {createdAt}
        </Text>
      </View>
    </View>
  );
}
