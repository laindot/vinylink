import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerDisabled: {
    flex: 1,
    opacity: 0.5,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.primaryColor,
    paddingVertical: 10,
  },
  messageText: {
    color: COLORS.errorMessage,
    fontSize: 12,
    marginVertical: 5,
  },
});
