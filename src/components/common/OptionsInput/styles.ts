import { StyleSheet } from 'react-native';
import { colors } from '../../../utils';

export const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: colors.primaryLight,
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
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.secondary,
  },
  optionSelected: {
    backgroundColor: colors.secondary,
  },
  textWhite: {
    color: colors.textOnPrimary,
  },
  textBlack: {
    color: colors.textOnSecondary,
  },
});
