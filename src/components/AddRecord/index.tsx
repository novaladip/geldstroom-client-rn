import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Options } from 'react-native-navigation';

import { TextInput, Button, OptionsInput } from '../common';
import { styles } from './styles';
import {
  TransactionType,
  TransactionCategory,
} from '../../store/transaction/types';

export default function AddRecords() {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('EXPENSE');
  const [category, setCategory] = useState('EDUCATION');

  function onPress() {}

  return (
    <View style={styles.container}>
      <OptionsInput
        label="Type"
        value={type}
        onSelect={setType}
        options={[TransactionType.INCOME, TransactionType.EXPENSE]}
      />
      <OptionsInput
        label="Category"
        value={category}
        onSelect={setCategory}
        options={Object.keys(TransactionCategory).map(category => category)}
      />
      <TextInput
        label="Amount"
        placeholder="e.g 20000"
        value={amount}
        keyboardType="numeric"
        onChangeText={setAmount}
      />
      <TextInput
        label="Description"
        placeholder="Enter description"
        value={description}
        onChangeText={setDescription}
      />
      <Button
        onPress={onPress}
        text="Add Transaction"
        containerStyle={{ marginTop: 30 }}
      />
    </View>
  );
}

AddRecords.options = {
  topBar: {
    title: {
      text: 'Add Records',
    },
  },
} as Options;
