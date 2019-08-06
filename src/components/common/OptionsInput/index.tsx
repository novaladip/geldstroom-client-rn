import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './styles';

interface Props {
  options: string[];
  value: string;
  label: string;
  onSelect: (value: string) => any;
}

export function OptionsInput(props: Props) {
  const { options, onSelect, value, label } = props;
  return (
    <View style={[styles.container]}>
      <Text style={[styles.label]}>{label}</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.optionsContainer}
      >
        {options.map(option => (
          <TouchableOpacity
            key={option}
            style={[
              styles.baseOption,
              value === option && styles.optionSelected,
            ]}
            onPress={() => onSelect(option)}
          >
            <Text
              style={value === option ? styles.textBlack : styles.textWhite}
            >
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
