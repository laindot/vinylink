import React from 'react';
import { FlatList, View } from 'react-native';
import { useSelector, useDispatch, connect } from 'react-redux';
import { styles } from './styles';
import Listing from '../../components/listing';
import { genreAction } from '../../store/actions/index';

const Products = () => {
  const dispatch = useDispatch();
  const listings = useSelector((state) => state.products.listings);
  const handleSelectGenre = (genre) => {
    dispatch(genreAction.selectGenre(genre.Id));

    // navigation.navigate('Album', { name: genre.name });
  };
  const renderItem = ({ item }) => (
    <Listing item={item} onSelected={handleSelectGenre} />
  );

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
