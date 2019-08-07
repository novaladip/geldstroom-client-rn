import { StyleSheet } from 'react-native';
import { colors } from '../../../../utils';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 25,
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderColor: colors.secondaryDark,
  },
  icon: {
    height: 40,
    width: 40,
    marginRight: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: '500',
    color: colors.textOnSecondary,
  },
});
