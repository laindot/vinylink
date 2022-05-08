import React, { useEffect } from 'react';
import { FlatList, View, Text } from 'react-native';
import { useSelector, useDispatch, connect } from 'react-redux';
import { styles } from './styles';
import { cartAction } from '../../store/actions/index';
import CartItem from '../../components/cart-item';

const Products = ({ navigation }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);
  const handleDeleteItem = (Id) => dispatch(cartAction.removeItem(Id));

  const renderItem = ({ item }) => (
    <CartItem item={item} onDelete={handleDeleteItem} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList
          data={items}
          keyExtractor={(item) => item.Id}
          renderItem={renderItem}
        />
      </View>
      <View style={styles.footer}>
        <Text style={styles.totalPrice}>Total:</Text>
        <Text style={styles.totalPrice}> $ {total}</Text>
      </View>
    </View>
  );
};

export default connect()(Products);
