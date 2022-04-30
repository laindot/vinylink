import React from 'react';
import { FlatList, View } from 'react-native';
import { useSelector, useDispatch, connect } from 'react-redux';
import { styles } from './styles';
import Genre from '../../components/genre/index';
import { genreAction } from '../../store/actions/index';

const Home = () => {
  const dispatch = useDispatch();
  console.log(
    'state',
    useSelector((state) => state)
  );
  const genres = useSelector((state) => state.genres.genres);
  const handleSelectGenre = (genre) => {
    dispatch(genreAction.selectGenre(genre.Id));

    // navigation.navigate('Album', { name: genre.name });
  };
  const renderItem = ({ item }) => (
    <Genre item={item} onSelected={handleSelectGenre} />
  );

  return (
    <View>
      <FlatList
        data={genres}
        keyExtractor={(item) => item.Id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default connect()(Home);
