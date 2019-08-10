import React, { useState, Fragment, useRef, useEffect } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Transition, Transitioning } from 'react-native-reanimated';
import { useDispatch } from 'react-redux';
import moment from 'moment';

import { requestGetTransactions } from '../../../store/transaction/action';
import {
  TransactionCategory,
  GetTransactionsOption,
  TransactionType,
} from '../../../store/transaction/types';
import { DatePicker, OptionsInput } from '../../common';
import { styles } from './styles';
import { Navigation } from 'react-native-navigation';

interface Props {
  componentId: string;
}

export function Filter(props: Props) {
  const { componentId } = props;
  const dispatch = useDispatch();
  const [isShowFull, setIsShowFull] = useState(false);
  const [date, setDate] = useState(moment.utc().format('YYYY/MM/DD'));
  const [isMonthly, setIsMonthly] = useState('Daily');
  const [type, setType] = useState('ALL');
  const [category, setCategory] = useState('ALL');
  const optionRef = useRef<any>();
  const transition = <Transition.In type="slide-left" />;

  function getTransaction() {
    const options: GetTransactionsOption = {
      date,
      isMonthly: isMonthly === 'Daily' ? 0 : 1,
      page: 1,
      limit: 0,
    };

    if (type !== 'ALL') options.type = type as TransactionType;
    if (category !== 'ALL') options.category = category as TransactionCategory;

    dispatch(requestGetTransactions(options));
  }

  function toggleShowFull() {
    optionRef.current.animateNextTransition();
    setIsShowFull(!isShowFull);
  }

  useEffect(() => {
    getTransaction();
  }, [date, isMonthly, type, category]);

  useEffect(() => {
    const componentAppearListener = Navigation.events().registerComponentDidAppearListener(
      ({ componentId: compId }) => {
        if (compId === componentId) {
          getTransaction();
        }
      },
    );
    return () => {
      componentAppearListener.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <DatePicker
        value={date}
        label="Date"
        placeholder="Select date"
        onChange={setDate}
      />

      <Transitioning.View
        transition={transition}
        ref={optionRef}
        style={{ width: '100%', backgroundColor: 'transparent' }}
      >
        {isShowFull && (
          <Fragment>
            <OptionsInput
              label="Type"
              value={type}
              onSelect={setType}
              options={['ALL', 'INCOME', 'EXPENSE']}
            />
            <OptionsInput
              label="Range"
              value={isMonthly}
              onSelect={value => setIsMonthly(value)}
              options={['Daily', 'Monthly']}
            />
            <OptionsInput
              label="Category"
              value={category}
              onSelect={setCategory}
              options={[
                'ALL',
                ...Object.keys(TransactionCategory).map(option => option),
              ]}
            />
          </Fragment>
        )}
      </Transitioning.View>

      <TouchableOpacity style={styles.toggleButton} onPress={toggleShowFull}>
        <Text style={styles.textButton}>
          {isShowFull ? 'Show Less' : 'Show More'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
