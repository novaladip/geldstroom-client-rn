import { StyleSheet } from 'react-native';
import { colors } from '../../../utils';

export const styles = StyleSheet.create({
  container: {
    paddingBottom: 5,
    backgroundColor: colors.secondary,
  },
  titleContainer: {
    backgroundColor: colors.secondaryDark,
    width: '100%',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: colors.secondary,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 14,
    color: colors.textOnPrimary,
  },
  icon: {
    height: 32,
    width: 32,
  },
  balance: {
    alignSelf: 'center',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  borderBottom: {
    borderBottomColor: colors.textOnPrimary,
    borderBottomWidth: 1,
  },
  income: {
    borderColor: colors.primary,
  },
  expense: {
    borderColor: colors.primaryDark,
  },
  total: {
    borderColor: colors.primaryLight,
  },
  text: {
    fontSize: 15,
    color: colors.textOnSecondary,
    fontWeight: 'bold',
  },
  textIncome: {
    color: colors.income,
  },
  textExpense: {
    color: colors.expense,
  },
});
