import {
  TransactionState,
  TransactionActionTypes,
  TransactionType,
} from '../types';
import { isEmpty } from '../../../utils';
import { AuthActionTypes } from '../../auth/types';

const initialState: TransactionState = {
  transaction: [],
  balance: {
    income: 0,
    expense: 0,
    isLoading: false,
    error: {},
  },
  page: 1,
  isEmpty: false,
  isLoading: false,
  error: {},
  addTransaction: {
    error: {},
    isLoading: false,
  },
};

export function transactionReducer(
  state = initialState,
  action: any,
): TransactionState {
  switch (action.type) {
    case TransactionActionTypes.REQUEST_GET_TRANSACTIONS:
      return {
        ...state,
        page: 1,
        isLoading: true,
        isEmpty: false,
        error: {},
      };

    case TransactionActionTypes.REQUEST_GET_TRANSACTIONSSUCCESS:
      return {
        ...state,
        isLoading: false,
        error: {},
        transaction: action.payload.transaction,
        isEmpty: isEmpty(action.payload.transaction),
      };

    case TransactionActionTypes.REQUEST_GET_TRANSACTIONSFAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        isEmpty: false,
      };

    case TransactionActionTypes.ADD_TRANSACTION:
      return {
        ...state,
        addTransaction: {
          error: {},
          isLoading: true,
        },
      };

    case TransactionActionTypes.ADD_TRANSACTION_SUCCESS:
      const income =
        action.payload.type === TransactionType.INCOME
          ? state.balance.income + action.payload.amount
          : state.balance.income;
      const expense =
        action.payload.type === TransactionType.EXPENSE
          ? state.balance.expense + action.payload.amount
          : state.balance.expense;
      return {
        ...state,
        transaction: [action.payload, ...state.transaction],
        balance: {
          ...state.balance,
          income,
          expense,
        },
        addTransaction: {
          error: {},
          isLoading: false,
        },
      };

    case TransactionActionTypes.ADD_TRANSACTION_ERROR:
      return {
        ...state,
        addTransaction: {
          error: action.payload,
          isLoading: false,
        },
      };

    case TransactionActionTypes.REQ_GET_BALANCE:
      return {
        ...state,
        balance: {
          ...state.balance,
          isLoading: true,
          error: {},
        },
      };

    case TransactionActionTypes.REQ_GET_BALANCE_SUCCESS:
      return {
        ...state,
        balance: {
          ...state.balance,
          isLoading: false,
          error: {},
          income: action.payload.INCOME,
          expense: action.payload.EXPENSE,
        },
      };

    case TransactionActionTypes.REQ_GET_BALANCE_FAILURE:
      return {
        ...state,
        balance: {
          ...state.balance,
          isLoading: false,
          error: action.payload,
        },
      };

    case AuthActionTypes.LOGOUT_USER:
      return initialState;

    default:
      return state;
  }
}
