import React, { useEffect, useRef } from 'react';
import { SafeAreaView } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import { Options, Navigation } from 'react-native-navigation';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';

import { OverviewRecords } from './OverviewRecords';
import { ApplicationState } from '../../store/store';
import {
  requestGetTransactions,
  reqGetBalance,
} from '../../store/transaction/action';
import { styles } from './styles';
import { Balance, FloatingActionButton } from '../common';

export interface Props {
  componentId: string;
}

export function Home(props: Props) {
  const dispatch = useDispatch();
  const flashMessageRef = useRef<any>();
  const { componentId } = props;
  const today = moment.utc().format('YYYY-MM-DD');

  const transaction = useSelector(
    (state: ApplicationState) => state.transaction,
  );
  const balance = useSelector(
    (state: ApplicationState) => state.transaction.balance,
  );

  function getTransaction() {
    dispatch(requestGetTransactions({ date: today, page: 1, limit: 0 }));
  }

  function getBalance() {
    dispatch(
      reqGetBalance({
        date: today,
        isMonthly: 0,
        showMessage: flashMessageRef.current.showMessage,
      }),
    );
  }

  useEffect(() => {
    const componentAppearListener = Navigation.events().registerComponentDidAppearListener(
      ({ componentId: compId }) => {
        if (compId === componentId) {
          getTransaction();
        }
      },
    );

    getBalance();

    return () => {
      componentAppearListener.remove();
    };
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
