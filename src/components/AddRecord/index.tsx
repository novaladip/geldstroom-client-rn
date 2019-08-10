import React, { useState, useRef } from 'react';
import { View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Options } from 'react-native-navigation';
import { connect } from 'react-redux';
import FlashMessage from 'react-native-flash-message';

import { TextInput, Button, OptionsInput } from '../common';
import { styles } from './styles';
import {
  TransactionType,
  TransactionCategory,
  AddTransactionState,
} from '../../store/transaction/types';
import { addTransaction } from '../../store/transaction/action';
import { ConnectedReduxProps, ApplicationState } from '../../store/store';
import { isEmpty } from '../../utils';

interface Props {
  componentId: string;
}

interface PropsFromState {
  addTransaction: AddTransactionState;
}

interface PropsFromDispatch {
  addTransactionAction: typeof addTransaction;
}

type AllProps = Props &
  PropsFromState &
  PropsFromDispatch &
  ConnectedReduxProps;

function AddRecords(props: AllProps) {
  const flashMessageRef = useRef<any>();
  const descriptionRef = useRef<any>();
  const { addTransactionAction, addTransaction } = props;
  const { error, isLoading } = addTransaction;
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('EXPENSE');
  const [category, setCategory] = useState('EDUCATION');

  function onPress() {
    addTransactionAction({ amount, type, category, description, showMessage });
  }

  function showMessage(option: {
    message: string;
    description: string;
    type: 'success' | 'danger';
  }) {
    flashMessageRef.current.showMessage(option);
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
          <OptionsInput
            label="Type"
            value={type}
            onSelect={setType}
            options={[TransactionType.INCOME, TransactionType.EXPENSE]}
          />
          <OptionsInput
            label="Category"
            value={category}
            onSelect={setCategory}
            options={Object.keys(TransactionCategory).map(category => category)}
          />
          <TextInput
            label="Amount"
            placeholder="e.g 20000"
            value={amount}
            keyboardType="numeric"
            onChangeText={setAmount}
            error={error.amount}
            onSubmitEditing={() => descriptionRef.current.focus()}
            blurOnSubmit={false}
            theme="dark"
          />
          <TextInput
            label="Description"
            placeholder="Enter description"
            value={description}
            onChangeText={setDescription}
            error={error.description}
            ref={descriptionRef}
            onSubmitEditing={() => {
              if (!isEmpty(amount)) onPress();
            }}
            theme="dark"
          />
          <Button
            color="primary"
            onPress={onPress}
            text="Add Transaction"
            containerStyle={{ marginVertical: 30 }}
            isLoading={isLoading}
            loadingText="Adding Transaction..."
          />
        </KeyboardAwareScrollView>

        <FlashMessage position="bottom" ref={flashMessageRef} />
      </View>
    </View>
  );
}

AddRecords.options = {
  topBar: {
    title: {
      text: 'Add Records',
    },
  },
  bottomTabs: { visible: false, drawBehind: true },
} as Options;

const mapStateToProps = (state: ApplicationState) => ({
  addTransaction: state.transaction.addTransaction,
});

const mapDispatchToProps = {
  addTransactionAction: addTransaction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddRecords);
