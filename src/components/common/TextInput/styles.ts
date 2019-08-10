import { StyleSheet } from 'react-native';
import { colors } from '../../../utils';

export const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    paddingTop: 15,
    width: '90%',
  },
  iconContainer: {
    position: 'absolute',
    top: 50,
    right: 5,
  },
  icon: {
    width: 28,
    height: 18,
    tintColor: colors.secondary,
  },
  iconError: {
    width: 28,
    height: 18,
    tintColor: 'red',
  },
  input: {
    color: colors.textOnSecondary,
    borderRadius: 5,
    padding: 10,
    borderWidth: 1,
    marginBottom: 3,
    borderColor: colors.secondary,
  },
  inputError: {
    color: 'red',
    borderRadius: 5,
    padding: 10,
    borderWidth: 1,
    marginBottom: 3,
    borderColor: 'red',
  },
  label: {
    marginLeft: 5,
    color: colors.textOnSecondary,
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
