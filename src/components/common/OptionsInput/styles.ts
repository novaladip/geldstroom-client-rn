import { StyleSheet } from 'react-native';
import { colors } from '../../../utils';

export const styles = StyleSheet.create({
  container: {
    width: '95%',
    alignSelf: 'center',
    paddingVertical: 5,
  },
  optionsContainer: {
    marginTop: 5,
  },
  label: {
    color: colors.textOnPrimary,
  },
  baseOption: {
    borderRadius: 5,
    margin: 5,
    minWidth: 100,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.textOnPrimary,
  },
  optionSelected: {
    backgroundColor: colors.secondaryLight,
  },
  textWhite: {
    color: colors.textOnPrimary,
  },
  textBlack: {
    color: colors.textOnSecondary,
  },
});
