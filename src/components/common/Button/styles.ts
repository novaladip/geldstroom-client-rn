import { StyleSheet } from 'react-native';
import { colors } from '../../../utils';

const base = StyleSheet.create({
  container: {
    paddingVertical: 15,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export const styles = StyleSheet.create({
  primaryContainer: {
    ...base.container,
    backgroundColor: colors.primaryLight,
  },
  secondaryContainer: {
    ...base.container,
    backgroundColor: colors.secondaryDark,
  },
  textPrimary: {
    ...base.text,
    color: colors.textOnPrimary,
  },
  textSecondary: {
    ...base.text,
    color: colors.textOnPrimary,
  },
  textLoadingPrimary: {
    ...base.text,
    color: colors.textOnPrimary,
  },
  textLoadingSecondary: {
    ...base.text,
    color: colors.textOnSecondary,
  },
});
