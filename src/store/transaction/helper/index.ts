import moment from 'moment';

/**
 * @param date string
 * @return formattedDate YYYY/MM/DD
 */
export function formatDate(date: string): string {
  return moment.utc(date).format('YYYY/MM/DD');
}
