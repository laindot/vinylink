import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../constants/index';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    backgroundColor: COLORS.primaryColor,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff',
    letterSpacing: 1,
  },
  menu: {
    color: '#fff',
    position: 'absolute',
    left: 16,
  },
});
