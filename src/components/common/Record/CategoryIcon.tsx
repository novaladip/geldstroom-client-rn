import React from 'react';
import { TransactionCategory } from '../../../store/transaction/types';
import { Image } from 'react-native';

export enum IconSource {
  FOOD = require('./assets/food.png'),
  EDUCATION = require('./assets/education.png'),
  HOBBY = require('./assets/hobby.png'),
}

interface Props {
  category: TransactionCategory;
}

export function CategoryIcon(props: Props) {
  const category = getIconSource(props.category);

  function getIconSource(category: TransactionCategory) {
    switch (category) {
      case TransactionCategory.FOOD:
        return IconSource.FOOD;

      case TransactionCategory.EDUCATION:
        return IconSource.EDUCATION;

      default:
        return IconSource.HOBBY;
    }
  }

  return (
    <Image
      source={category}
      resizeMethod="auto"
      resizeMode="cover"
      style={{
        height: 32,
        width: 32,
        marginRight: 10,
      }}
    />
  );
}
