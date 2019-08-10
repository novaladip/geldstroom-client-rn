import { StyleSheet } from 'react-native';
import { colors } from '../../utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 15,
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
  },
  registerContainer: {
    paddingVertical: 10,
    width: '100%',
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
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
    alignItems: 'flex-start',
    alignSelf: 'center',
    backgroundColor: colors.secondaryDark,
  },
  text: {
    color: colors.textOnSecondary,
  },
  textBold: {
    fontWeight: 'bold',
  },
  title: {
    color: colors.textOnPrimary,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
