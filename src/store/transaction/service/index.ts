import { AxiosResponse } from 'axios';
import { Transaction, GetTransactionsOption } from '../types';
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
