import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
    paddingVertical: 10,
  },
  footer: {
    flex: 1,
    flexGrow: 0.1,
    borderTopColor: COLORS.primaryColor,
    borderTopWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginHorizontal: 20,
  },
  totalPrice: {
    marginTop: 10,
    marginBottom: 20,
    fontSize: 22,
    fontFamily: 'OpenSans-Bold',
    fontWeight: '600',
    color: COLORS.primaryColor,
  },
});
