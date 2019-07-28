import { StyleSheet } from 'react-native';
import { colors } from '../../utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    paddingVertical: 15,
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
  },
  titleContainer: {
    marginTop: 25,
    padding: 20,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 30,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: colors.secondary,
  },
  text: {
    color: 'white',
  },
  title: {
    color: colors.textOnSecondary,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
