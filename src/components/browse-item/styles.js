import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../constants/index';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    height: 240,
    width: width / 2.3,
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: COLORS.white,
    marginTop: 20,
    marginHorizontal: 5,
  },
  touchable: {
    // flex: 1,
  },
  iconContainer: {
    height: 180,
    width: width / 2.3,
    backgroundColor: COLORS.primaryColor,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    height: 120,
    width: 120,
  },
  caption: {
    textAlign: 'center',
    fontFamily: 'OpenSans-Bold',
    fontSize: 20,
    fontWeight: '400',
    marginTop: 10,
    color: COLORS.textColor,
  },
});
