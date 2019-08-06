import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import moment from 'moment';

import { OverviewRecords } from './OverviewRecords';
import { Options } from 'react-native-navigation';
import { ApplicationState, ConnectedReduxProps } from '../../store/store';
import { requestGetTransactions } from '../../store/transaction/action';
import { connect } from 'react-redux';
import { TransactionState } from '../../store/transaction/types';
import { styles } from './styles';
import { Balance, FloatingActionButton } from '../common';

export interface Props {
  componentId: string;
}

export interface StateFromProps {
  transaction: TransactionState;
}

export interface StateFromDispatch {
  requestGetTransactions: typeof requestGetTransactions;
}

export type AllProps = Props &
  StateFromProps &
  StateFromDispatch &
  ConnectedReduxProps;

function Home(props: AllProps) {
  const { componentId, requestGetTransactions, transaction } = props;
  const today = moment.utc().format('YYYY-MM-DD');

  useEffect(() => {
    requestGetTransactions({ date: today, page: 1, limit: 9 });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FloatingActionButton componentId={componentId} />
      <Balance income={500000} expense={120000} />
      <OverviewRecords transactions={transaction.transaction} />
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
