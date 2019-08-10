import React, { useState, Fragment, useRef, useEffect } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Transition, Transitioning } from 'react-native-reanimated';
import moment from 'moment';

import { TransactionCategory } from '../../../store/transaction/types';
import { DatePicker, OptionsInput } from '../../common';
import { styles } from './styles';

export function Filter() {
  const [isShowFull, setIsShowFull] = useState(false);
  const [date, setDate] = useState(moment.utc().format('YYYY/MM/DD'));
  const [isMontly, setIsMonthly] = useState('Daily');
  const [type, setType] = useState('ALL');
  const [category, setCategory] = useState('ALL');
  const optionRef = useRef<any>();
  const transition = <Transition.In type="slide-left" />;

  function toggleShowFull() {
    optionRef.current.animateNextTransition();
    setIsShowFull(!isShowFull);
  }

  useEffect(() => {}, [date, isMontly, type, category]);

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
              value={isMontly}
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
