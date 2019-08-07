import { StyleSheet } from 'react-native';
import { colors } from '../../../../utils';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderColor: colors.secondaryDark,
  },
  icon: {
    height: 26,
    width: 26,
  },
  name: {
    fontSize: 15,
    fontWeight: '500',
    color: colors.textOnSecondary,
  },
});
