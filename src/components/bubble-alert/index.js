import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

const BubbleAlert = () => {
  const getNumber = (n) => {
    if (!n) {
      return '';
    }
    return n > 9 ? '9+' : n;
  };
  return (
    <View style={styles.container}>
      <Text style={styles.number}>+9</Text>
    </View>
  );
};

export default BubbleAlert;
