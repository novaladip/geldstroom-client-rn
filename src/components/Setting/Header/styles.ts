import { StyleSheet } from 'react-native';
import { colors } from '../../../utils';

export const styles = StyleSheet.create({
  container: {
    height: '25%',
    width: '100%',
    backgroundColor: colors.secondaryDark,
    padding: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: '500',
    color: colors.textOnPrimary,
  },
});
