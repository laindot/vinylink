import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/index';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 10,
    color: COLORS.textColor,
    flexGrow: 1,
    width: 350,
  },
  cartButton: {
    marginVertical: 25,
    height: 40,
  },
  picture: {
    height: 300,
    width: '100%',
    maxWidth: 500,
    // alignItems: 'center',
    // alignContent: 'center',
    // justifyContent: 'center',
  },
  price: {
    marginTop: 10,
    marginBottom: 20,
    fontSize: 32,
    fontFamily: 'OpenSans-Bold',
    fontWeight: '600',
    color: COLORS.primaryColor,
  },
});
