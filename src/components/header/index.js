import React from 'react';
import { View, Text } from 'react-native';
import IonicIcons from 'react-native-vector-icons/Ionicons';
import { styles } from './styles';

const Header = ({ navigation, title }) => (
  <View style={styles.container}>
    <IonicIcons
      name="menu"
      size={28}
      style={styles.menu}
      onPress={navigation.openDrawer}
    />
    <View>
      <Text style={styles.title}>{title}</Text>
    </View>
  </View>
);
export default Header;
