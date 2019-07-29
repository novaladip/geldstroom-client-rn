import { StyleSheet } from 'react-native';
import { colors } from '../../../utils';

export const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    paddingTop: 15,
    width: '90%',
  },
  input: {
    color: colors.textOnPrimary,
    borderBottomWidth: 1,
    marginBottom: 3,
    borderColor: colors.primaryLight,
  },
  inputError: {
    color: 'red',
    borderBottomWidth: 1,
    marginBottom: 3,
    borderColor: 'red',
  },
  label: {
    marginLeft: 5,
    color: colors.textOnPrimary,
  },
  labelError: {
    marginLeft: 5,
    color: 'red',
  },
  error: {
    fontSize: 12,
    color: 'red',
    marginLeft: 5,
  },
});
