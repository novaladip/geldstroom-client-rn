import React, { Fragment, useState } from 'react';
import { SafeAreaView } from 'react-native';
import moment from 'moment';
import { DateObject } from 'react-native-calendars';

import { SelectedDate, Calendar } from '../common/Calendar';
import { colors } from '../../utils';
import { Options } from 'react-native-navigation';

const today = moment().format('YYYY-MM-DD');

export const Home = () => {
  const [selectedDate, setSelectedDate] = useState<SelectedDate>({
    [today]: { selected: true, marked: true },
  });

  function onChangeDate(data: DateObject) {
    const formattedData = {
      [data.dateString]: { selected: true, marked: true },
    };
    setSelectedDate(formattedData);
  }

  return (
    <Fragment>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: colors.primary,
        }}
      >
        <Calendar selectedDate={selectedDate} onChangeChange={onChangeDate} />
      </SafeAreaView>
    </Fragment>
  );
};

Home.options = {
  topBar: {
    visible: false,
    drawBehind: true,
  },
} as Options;
