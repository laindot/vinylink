import React from 'react';
import { useSelector, connect, useDispatch } from 'react-redux';
import { View, ScrollView, Text, Button, Image } from 'react-native';
import { COLORS } from '../../constants';
import { styles } from './styles';
import { cartAction } from '../../store/actions';
import SellerCard from '../../components/seller-card';

const ProductDetail = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.selectedProduct);
  console.log(product);
  const { title, picture, price, seller } = product;

  const handleAddToCart = () => dispatch(cartAction.addItem(product));
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Image style={styles.picture} source={picture} />
        <Text style={styles.price}>$ {price}</Text>
        <Button
          style={styles.cartButton}
          title="Add To Cart"
          onPress={() => handleAddToCart()}
          color={COLORS.primaryColor}
        />
        <SellerCard item={seller} />
      </View>
    </ScrollView>
  );
};

export default connect()(ProductDetail);
