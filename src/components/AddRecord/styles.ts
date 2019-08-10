import { StyleSheet } from 'react-native';
import { colors } from '../../utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 10,
    justifyContent: 'center',
  },
  inputContainer: {
    height: '95%',
    width: '90%',
    borderTopRightRadius: 35,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    elevation: 3,
    alignSelf: 'center',
    backgroundColor: colors.secondaryDark,
  },
});
