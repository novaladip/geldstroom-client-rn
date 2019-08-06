import { StyleSheet } from 'react-native';
import { colors } from '../../../utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.textOnPrimary,
  },
  header: {
    backgroundColor: colors.secondaryDark,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: colors.secondary,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
    color: colors.textOnPrimary,
  },
  textButton: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.textOnSecondary,
  },
});
