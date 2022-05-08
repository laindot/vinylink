import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../constants/index';

const { height } = Dimensions.get('window');

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
    // marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 15,
    height: height / 5,
    backgroundColor: COLORS.white,
    // paddingVertical: 10,
  },
  card: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 10,
  },
  picture: {
    marginTop: 7,
    height: 110,
    width: 110,
  },
  caption: {
    width: 230,
    marginRight: 10,
    marginLeft: 10,
  },
  title: {
    // flex: 1,
    fontFamily: 'OpenSans-Bold',
    fontSize: 18,
    fontWeight: '300',
    textAlign: 'left',
    color: COLORS.textColor,
  },
  price: {
    fontSize: 22,
    fontFamily: 'OpenSans-Bold',
    fontWeight: '600',
    color: COLORS.textColor,
  },
  delete: {
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'OpenSans-Bold',
    fontWeight: '600',
    color: COLORS.primaryColor,
  },
});
