import React from 'react';
import { View, Text, Image } from 'react-native';
import IonicIcons from 'react-native-vector-icons/Ionicons';
import { styles } from './styles';

const SellerCard = ({ item }) => (
  <View style={styles.container}>
    <View style={styles.row}>
      <IonicIcons name="person-outline" size={28} style={styles.icon} />
      <Text style={styles.text}>{item.name}</Text>
    </View>
    <View style={styles.row}>
      <IonicIcons name="call-outline" size={28} style={styles.icon} />
      <Text style={styles.text}>{item.phone}</Text>
    </View>
    <View style={styles.row}>
      <IonicIcons name="location-outline" size={28} style={styles.icon} />
      <Text style={styles.text}>{item.location}</Text>
    </View>
  </View>
);

export default SellerCard;
