import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../constants/index';

const { height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 20,
    width: '100%',
    // height: 120,
    borderRadius: 5,
    backgroundColor: COLORS.white,
    padding: 10,
    flexWrap: 'wrap',
  },
  row: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    flexGrow: 1,
    padding: 5,
  },
  text: {
    fontSize: 16,
    color: COLORS.textColor,
    marginLeft: 10,
    maxWidth: 280,
  },
  icon: {
    color: COLORS.primaryColor,
  },
});
