import { StyleSheet } from 'react-native';
import { colors } from '../../../utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: colors.secondaryDark,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.textOnSecondary,
  },
  textButton: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.secondaryLight,
  },
});
