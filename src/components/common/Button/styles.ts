import { StyleSheet } from 'react-native';
import { colors } from '../../../utils';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    width: '90%',
    backgroundColor: colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
  },
  text: {
    fontSize: 15,
    color: colors.textOnSecondary,
  },
  textLoading: {
    fontSize: 15,
    color: colors.textOnSecondary,
    fontWeight: 'bold',
  },
});
