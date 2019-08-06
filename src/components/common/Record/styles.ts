import { StyleSheet } from 'react-native';
import { colors } from '../../../utils';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.secondary,
    width: '100%',
    paddingVertical: 15,
    paddingHorizontal: 10,
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderColor: colors.secondaryDark,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  item: {},
  textLarge: {
    fontSize: 15,
  },
  textSmall: {
    fontSize: 11,
  },
  text: {
    color: colors.textOnSecondary,
  },
  textRight: {
    textAlign: 'right',
  },
});
