import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';

const CartItem = ({ item, onSelect, onDelete }) => (
  <View style={styles.container}>
    <View onPress={onSelect} style={styles.card}>
      <Image source={item.picture} style={styles.picture} />
      <View style={styles.caption}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>$ {item.price}</Text>
        <Text style={styles.title}>({item.quantity})</Text>
        <TouchableOpacity onPress={() => onDelete(item.Id)}>
          <Text style={styles.delete}>DELETE</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

export default CartItem;
