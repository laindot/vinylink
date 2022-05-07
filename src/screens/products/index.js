import React, { useEffect } from 'react';
import { FlatList, View } from 'react-native';
import { useSelector, useDispatch, connect } from 'react-redux';
import { styles } from './styles';
import Product from '../../components/product';
import { genreAction, productAction } from '../../store/actions/index';

const Products = ({ navigation }) => {
  const dispatch = useDispatch();
  const selectedGenre = useSelector((state) => state.genres.selectedGenre);
  const listings = selectedGenre
    ? useSelector((state) => state.products.filteredListings)
    : useSelector((state) => state.products.listings);

  const handleSelectProduct = (product) => {
    dispatch(productAction.selectProduct(product.Id));
    console.log(product);
    navigation.navigate('ProductDetail');
  };

  const renderItem = ({ item }) => (
    <Product item={item} onSelect={handleSelectProduct} />
  );

  useEffect(() => {
    if (selectedGenre) {
      dispatch(productAction.filterProducts(selectedGenre.Id));
    }
    return () => dispatch(genreAction.resetState());
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={listings}
        keyExtractor={(item) => item.Id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default connect()(Products);
