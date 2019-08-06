import { StyleSheet } from 'react-native';
import { colors } from '../../../utils';

export const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    right: 20,
    bottom: 20,
    position: 'absolute',
    backgroundColor: colors.secondary,
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 32,
    color: colors.textOnSecondary,
  },
});
