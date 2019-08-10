import { StyleSheet } from 'react-native';
import { colors } from '../../../utils';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: colors.secondaryDark,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toggleButton: {
    alignSelf: 'flex-end',
    marginRight: 5,
    marginTop: 10,
  },
  textButton: {
    color: colors.textOnSecondary,
    fontWeight: 'bold',
    fontSize: 15,
  },
});
