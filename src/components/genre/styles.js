import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../constants/index';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 5,
    shadoColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    height: height / 2,
  },
  touchable: {
    flex: 1,
    alignItems: 'center',
  },
  slideshowContainer: {
    width: width - 10,
  },
  title: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 18,
    color: COLORS.textColor,
  },
});
