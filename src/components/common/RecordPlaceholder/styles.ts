import { StyleSheet } from 'react-native';
import { colors } from '../../../utils';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.textOnPrimary,
    width: '100%',
    paddingVertical: 15,
    paddingHorizontal: 10,
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderColor: colors.secondaryLight,
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
