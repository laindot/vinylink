import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { COLORS } from '../../constants';
import { styles } from './styles';

const ListingItem = ({ title, address, onSelect, picture, price }) => {
  return (
    <TouchableOpacity onPress={() => onSelect()} style={styles.container}>
      <Image source={{ uri: picture }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{title}</Text>
        <Text style={styles.address}>{price}</Text>
        <Text style={styles.address}>{address}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListingItem;
