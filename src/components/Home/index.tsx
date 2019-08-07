import React, { useEffect, useRef } from 'react';
import { SafeAreaView } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import { Options } from 'react-native-navigation';
import { connect } from 'react-redux';
import moment from 'moment';

import { OverviewRecords } from './OverviewRecords';
import { ApplicationState, ConnectedReduxProps } from '../../store/store';
import {
  requestGetTransactions,
  reqGetBalance,
} from '../../store/transaction/action';
import { TransactionState, BalanceState } from '../../store/transaction/types';
import { styles } from './styles';
import { Balance, FloatingActionButton } from '../common';

export interface Props {
  componentId: string;
}

export interface StateFromProps {
  transaction: TransactionState;
  balance: BalanceState;
}

export interface StateFromDispatch {
  requestGetTransactions: typeof requestGetTransactions;
  reqGetBalance: typeof reqGetBalance;
}

export type AllProps = Props &
  StateFromProps &
  StateFromDispatch &
  ConnectedReduxProps;

function Home(props: AllProps) {
  const flashMessageRef = useRef<any>();
  const {
    componentId,
    requestGetTransactions,
    transaction,
    reqGetBalance,
    balance,
  } = props;
  const today = moment.utc().format('YYYY-MM-DD');

  useEffect(() => {
    requestGetTransactions({ date: today, page: 1, limit: 9 });
    reqGetBalance({
      date: today,
      isMonthly: 0,
      showMessage: flashMessageRef.current.showMessage,
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FloatingActionButton componentId={componentId} />
      <Balance balance={balance} />
      <OverviewRecords
        transactions={transaction.transaction}
        isLoading={transaction.isLoading}
      />
      <FlashMessage position="top" ref={flashMessageRef} />
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
  balance: state.transaction.balance,
});

const mapDispatchToProps = {
  requestGetTransactions,
  reqGetBalance,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
