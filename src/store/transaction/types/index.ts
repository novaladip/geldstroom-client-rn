export enum TransactionCategory {
  FOOD = 'FOOD',
  EDUCATION = 'EDUCATION',
  HOBBY = 'HOBBY',
}

export enum TransactionType {
  INCOME = 'INCOME',
  EXPENSE = 'EXPENSE',
}

export enum IsMonthly {
  TRUE = 1,
  OFF = 0,
}

export interface Transaction {
  id: string;
  amount: number;
  category: TransactionCategory;
  type: TransactionType;
  description: string | null;
  createdAt: string;
  updatedAt: string | null;
  userId: string;
}

export interface AddTransactionState {
  error: any;
  isLoading: boolean;
}

export interface TransactionState {
  transaction: Transaction[];
  page: number;
  isLoading: boolean;
  error: any;
  addTransaction: AddTransactionState;
  isEmpty: boolean;
}

export enum TransactionActionTypes {
  REQUEST_GET_TRANSACTIONS = '@@transaction/REQUEST_GET_TRANSACTIONS',
  REQUEST_GET_TRANSACTIONSSUCCESS = '@@transaction/REQUEST_GET_TRANSACTIONS_SUCCESS',
  REQUEST_GET_TRANSACTIONSFAILURE = '@@transaction/REQUEST_GET_TRANSACTIONS_FAILURE',
  ADD_TRANSACTION = '@@transaction/ADD_TRANSACTION',
  ADD_TRANSACTION_SUCCESS = '@@transaction/ADD_TRANSACTION_SUCCESS',
  ADD_TRANSACTION_ERROR = '@@transaction/ADD_TRANSACTION_ERROR',
}

export interface GetTransactionsOption {
  date: string;
  type?: TransactionType;
  category?: TransactionCategory;
  isMonthly?: IsMonthly;
  page: number;
  limit: number;
}

export interface GetTransactionSuccessPayload {
  transaction: Transaction[];
}

export interface AddTransactionPayload {
  type: string;
  category: string;
  amount: string;
  description: string;
  showMessage: (option: {
    message: string;
    description: string;
    type: 'success' | 'danger';
  }) => void;
}

export interface AddTransactionSuccessPayload {
  transaction: Transaction;
}
