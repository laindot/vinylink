import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../constants/index';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
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
    marginTop: 20,
    marginHorizontal: 20,
    height: height / 2,
    backgroundColor: COLORS.white,
  },
  touchable: {
    flex: 1,
    alignItems: 'center',
  },
  slideshowContainer: {
    // width: width - 40,
    height: 200,
  },
  title: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center',
    marginTop: 10,
    color: COLORS.textColor,
  },
  description: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 14,
    textAlign: 'center',
    marginHorizontal: 10,
  },
});
