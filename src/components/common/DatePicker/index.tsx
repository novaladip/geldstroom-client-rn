import React from 'react';
import DateInput from 'react-native-datepicker';

import { styles } from './styles';
import { View, Text } from 'react-native';

interface Props {
  value: string;
  label: string;
  placeholder: string;
  onChange: (date: string) => any;
}

export function DatePicker({ value, label, placeholder, onChange }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <DateInput
        showIcon={false}
        maxDate={new Date()}
        style={styles.dateInput}
        customStyles={{
          dateInput: styles.customStyleDateInput,
          dateText: styles.dateText,
        }}
        placeholder={placeholder}
        date={value}
        mode="date"
        format="YYYY/MM/DD"
        confirmBtnText="Comfirm"
        cancelBtnText="Cancel"
        onDateChange={onChange}
      />
    </View>
  );
}
