import { AxiosResponse } from 'axios';
import {
  Transaction,
  GetTransactionsOption,
  TransactionCategory,
  TransactionType,
} from '../types';
import { formatDate } from '../helper';
import { api, handleApiError } from '../../../utils';

export async function getTransactions(options: GetTransactionsOption) {
  try {
    const { date, type, category, isMonthly, page, limit } = options;
    const res: AxiosResponse<Transaction[]> = await api.get('/transaction', {
      params: {
        date: formatDate(date),
        type,
        category,
        isMonthly,
        page,
        limit,
      },
    });
    const { data } = await res;
    return data;
  } catch (error) {
    handleApiError(error);
  }
}

export async function postTrasanaction({
  type,
  category,
  amount,
  description,
}: {
  type: string;
  category: string;
  amount: string;
  description: string;
}) {
  try {
    const body = { type, category, description, amount: parseInt(amount) };
    const res: AxiosResponse<Transaction> = await api.post(
      '/transaction',
      body,
    );
    const { data } = await res;
    return data;
  } catch (error) {
    handleApiError(error);
  }
}
