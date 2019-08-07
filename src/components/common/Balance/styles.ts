import { StyleSheet } from 'react-native';
import { colors } from '../../../utils';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: colors.secondary,
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    marginTop: 10,
  },
  balance: {
    alignSelf: 'center',
    width: '45%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
  },
  income: {
    borderColor: colors.income,
  },
  expense: {
    borderColor: colors.expense,
    marginRight: 10,
  },
  total: {
    borderColor: colors.secondaryLight,
  },
  text: {
    fontSize: 15,
    color: colors.textOnPrimary,
    fontWeight: 'bold',
  },
  textIncome: {
    color: colors.income,
  },
  textExpense: {
    color: colors.expense,
  },
});
