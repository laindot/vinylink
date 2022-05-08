import React from 'react';
import { View, Text } from 'react-native';
import IonicIcons from 'react-native-vector-icons/Ionicons';
import BubbleAlert from '../bubble-alert';
import { styles } from './styles';

const Header = ({ navigation, title, cartButton }) => (
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
    {cartButton ? (
      <View style={{ position: 'absolute', right: 16, width: 35 }}>
        <IonicIcons
          name="cart"
          style={styles.cart}
          size={28}
          onPress={() => navigation.navigate('Cart')}
        />
        {/* <View style={styles.bubble}>
          <BubbleAlert />
        </View> */}
      </View>
    ) : null}
  </View>
);
export default Header;
