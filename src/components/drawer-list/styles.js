import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../constants/index';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.backgroundColor,
  },
  header: {
    flex: 1,
    width: '100%',
    height: 100,
    backgroundColor: COLORS.primaryColor,
    padding: 10,
  },
  caption: {
    fontSize: 16,
    color: '#fff',
  },
  title: {
    // fontWeight: 'bold',
    fontSize: 16,
    color: COLORS.primaryColor,
    letterSpacing: 1,
    // backgroundColor: COLORS.primaryColor,
  },
});
