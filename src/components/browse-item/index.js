import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';

const BrowseItem = ({ caption, icon, onSelect }) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={onSelect}>
      <View style={styles.iconContainer}>
        <Image source={icon} style={styles.icon} />
      </View>
      <Text style={styles.caption}>{caption}</Text>
    </TouchableOpacity>
  </View>
);

export default BrowseItem;
