import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import moment from 'moment';

import { OverviewRecords } from './OverviewRecords';
import { Options } from 'react-native-navigation';
import { ApplicationState } from '../../store/store';
import { requestGetTransactions } from '../../store/transaction/action';
import { connect } from 'react-redux';
import { TransactionState } from '../../store/transaction/types';
import { styles } from './styles';
import { Balance } from '../common';

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
  const { requestGetTransactions, transaction } = props;
  const today = moment.utc().format('YYYY-MM-DD');

  useEffect(() => {
    requestGetTransactions({ date: today, page: 1, limit: 6 });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Balance income={500000} expense={120000} />
      <OverviewRecords
        transactions={transaction.transaction}
        selectedDate={today}
      />
    </SafeAreaView>
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
