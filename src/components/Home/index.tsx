import React, { Fragment, useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import moment from 'moment';
import { DateObject } from 'react-native-calendars';

import { SelectedDate, Calendar } from '../common/Calendar';
import { colors } from '../../utils';
import { Options } from 'react-native-navigation';
import { ApplicationState } from '../../store/store';
import { requestGetTransactions } from '../../store/transaction/action';
import { connect } from 'react-redux';
import { TransactionState } from '../../store/transaction/types';

export interface Props {
  componentId: string;
}

export interface StateFromProps {
  transaction: TransactionState;
}

export interface StateFromDispatch {
  requestGetTransactions: typeof requestGetTransactions;
}

export type AllProps = Props & StateFromProps & StateFromDispatch;

function Home(props: AllProps) {
  const { requestGetTransactions } = props;
  const today = moment.utc().format('YYYY-MM-DD');
  const [selectedDateString, setSelectedDateString] = useState(today);
  const [selectedDate, setSelectedDate] = useState<SelectedDate>({
    [today]: { selected: true, marked: true },
  });

  function onChangeDate(data: DateObject) {
    const formattedData = {
      [data.dateString]: { selected: true, marked: true },
    };
    setSelectedDateString(data.dateString);
    setSelectedDate(formattedData);
  }

  useEffect(() => {
    requestGetTransactions({ date: selectedDateString, page: 1, limit: 5 });
  }, [selectedDateString]);

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
}

Home.options = {
  topBar: {
    visible: false,
    drawBehind: true,
  },
} as Options;

const mapStateToProps = (state: ApplicationState) => ({
  transaction: state.transaction,
});

const mapDispatchToProps = {
  requestGetTransactions,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
