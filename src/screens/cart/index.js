import React, { useEffect } from 'react';
import { FlatList, View } from 'react-native';
import { useSelector, useDispatch, connect } from 'react-redux';
import { styles } from './styles';
import Product from '../../components/product';
import { genreAction, productAction } from '../../store/actions/index';
import CartItem from '../../components/cart-item';

const Products = ({ navigation }) => {
  const items = [
    {
      Id: 1,
      name: 'The Dark Side of the Moon',
      price: 30.99,
      quantity: 2,
    },
    {
      Id: 2,
      name: 'Animals',
      price: 35.99,
      quantity: 1,
    },
    {
      Id: 3,
      name: 'Wish You Were Here',
      price: 31.99,
      quantity: 2,
    },
  ];

  const renderItem = ({ item }) => <CartItem item={item} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.Id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default connect()(Products);
