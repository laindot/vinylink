import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

const Genre = ({ item, onSelected }) => (
  <View style={styles.container}>
    {/* <TouchableOpacity onPress={() => onSelected(item)}> */}
    <View>
      <Text style={styles.title}>{item.name}</Text>
    </View>
    {/* </TouchableOpacity> */}
  </View>
);

export default Genre;
