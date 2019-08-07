import { TransactionState, TransactionActionTypes } from '../types';
import { isEmpty } from '../../../utils';

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
      return {
        ...state,
        transaction: [action.payload, ...state.transaction],
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

    default:
      return state;
  }
}
