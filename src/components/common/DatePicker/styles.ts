import { StyleSheet } from 'react-native';
import { colors } from '../../../utils';

export const styles = StyleSheet.create({
  container: {
    width: '95%',
    paddingVertical: 10,
    alignSelf: 'center',
  },
  dateInput: {
    marginTop: 5,
    width: '100%',
  },
  customStyleDateInput: {
    borderColor: colors.textOnPrimary,
    borderRadius: 5,
    color: colors.textOnPrimary,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  dateText: {
    color: colors.textOnPrimary,
    textAlign: 'left',
  },
  label: {
    fontSize: 14,
    color: colors.textOnPrimary,
  },
});
