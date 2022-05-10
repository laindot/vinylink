import React from 'react';
import { useSelector, connect, useDispatch } from 'react-redux';
import { View, Text } from 'react-native';
import IonicIcons from 'react-native-vector-icons/Ionicons';
import BubbleAlert from '../bubble-alert';
import { styles } from './styles';

const Header = ({ navigation, title, cart, menu, children }) => {
  const items = useSelector((state) => state.cart.items);
  const totalQuantity = items.reduce((acc, el) => acc + el.quantity, 0);
  return (
    <View style={styles.container}>
      {menu ? (
        <IonicIcons
          name="menu"
          size={28}
          style={styles.menu}
          onPress={navigation.openDrawer}
        />
      ) : null}
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
      {cart ? (
        <View style={{ position: 'absolute', right: 16, width: 35 }}>
          <IonicIcons
            name="cart"
            style={styles.cart}
            size={28}
            onPress={() => navigation.navigate('Cart')}
          />
          {totalQuantity !== 0 ? (
            <View style={styles.bubble}>
              <BubbleAlert value={totalQuantity} />
            </View>
          ) : null}
        </View>
      ) : null}
    </View>
  );
};
export default Header;
