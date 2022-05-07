import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';

const Product = ({ item, onSelect }) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={() => onSelect(item)} style={styles.touchable}>
      <Image source={item.picture} style={styles.picture} />
      <View style={styles.caption}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>$ {item.price}</Text>
      </View>
    </TouchableOpacity>
  </View>
);

export default Product;
