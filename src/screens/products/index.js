import React, { useEffect } from 'react';
import { FlatList, View } from 'react-native';
import { useSelector, useDispatch, connect } from 'react-redux';
import { styles } from './styles';
import Listing from '../../components/listing';
import { genreAction, productAction } from '../../store/actions/index';

const Products = () => {
  const dispatch = useDispatch();
  const selectedGenre = useSelector((state) => state.genres.selectedGenre);
  const listings = selectedGenre
    ? useSelector((state) => state.products.filteredListings)
    : useSelector((state) => state.products.listings);
  const handleSelectGenre = (listing) => {
    dispatch(genreAction.selectGenre(listing.Id));
    // navigation.navigate('Album', { name: genre.name });
  };

  const renderItem = ({ item }) => (
    <Listing item={item} onSelected={handleSelectGenre} />
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
