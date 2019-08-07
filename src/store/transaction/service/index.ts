import { AxiosResponse } from 'axios';
import {
  Transaction,
  GetTransactionsOption,
  ReqGetBalanceOption,
} from '../types';
import { formatDate } from '../helper';
import { api, handleApiError, isEmpty } from '../../../utils';

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

export async function getBalance(option: ReqGetBalanceOption) {
  try {
    const params = {
      date: formatDate(option.date),
      isMonthly: option.isMonthly,
    };
    const res: AxiosResponse<
      [
        {
          INCOME: string | null;
        },
        {
          EXPENSE: string | null;
        }
      ]
    > = await api.get('/transaction/total/amount', { params });
    const { data } = await res;
    return {
      INCOME: isEmpty(data[0].INCOME) ? 0 : parseInt(data[0].INCOME as string),
      EXPENSE: isEmpty(data[1].EXPENSE)
        ? 0
        : parseInt(data[1].EXPENSE as string),
    };
  } catch (error) {
    handleApiError(error);
  }
}
