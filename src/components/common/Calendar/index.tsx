import React from 'react';
import moment from 'moment';
import { Calendar as Calendars, DateObject } from 'react-native-calendars';
import { colors } from '../../../utils';

export interface SelectedDate {
  [date: string]: {
    selected: boolean;
    marked: boolean;
  };
}

export interface Props {
  selectedDate: SelectedDate;
  onChangeChange: (dateObject: DateObject) => any;
}

const today = moment.utc().format('YYYY-MM-DD');

export function Calendar(props: Props) {
  const { selectedDate, onChangeChange } = props;

  return (
    <Calendars
      hideExtraDays
      maxDate={today}
      markedDates={selectedDate}
      onDayPress={onChangeChange}
      theme={{
        backgroundColor: colors.primaryLight,
        calendarBackground: colors.primaryLight,
        selectedDayBackgroundColor: colors.secondaryLight,
        selectedDayTextColor: colors.textOnSecondary,
        todayTextColor: colors.secondaryDark,
        textDisabledColor: colors.primaryDark,
        dotColor: colors.secondary,
        dayTextColor: colors.textOnPrimary,
        arrowColor: colors.textOnPrimary,
        monthTextColor: colors.textOnPrimary,
      }}
    />
  );
}
