import { TransactionState, TransactionActionTypes } from '../types';
import { isEmpty } from '../../../utils';

const initialState: TransactionState = {
  transaction: [],
  page: 1,
  isEmpty: false,
  isLoading: false,
  error: {},
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

    default:
      return state;
  }
}
