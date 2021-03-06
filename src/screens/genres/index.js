import React, { useEffect } from 'react';
import { FlatList, View } from 'react-native';
import { useSelector, useDispatch, connect } from 'react-redux';
import { styles } from './styles';
import Genre from '../../components/genre/index';
import { genreAction } from '../../store/actions/index';

const Genres = ({ navigation }) => {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.genres.genres);
  const handleSelectGenre = (genre) => {
    dispatch(genreAction.selectGenre(genre.Id));
    navigation.navigate('Listings', { name: genre.name });
  };
  const renderItem = ({ item }) => (
    <Genre item={item} onSelected={handleSelectGenre} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={genres}
        keyExtractor={(item) => item.Id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default connect()(Genres);
