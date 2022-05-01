import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import BrowseItem from '../../components/browse-item';
import vinyl from '../../../assets/icons/vinyl.png';
import mic from '../../../assets/icons/mic.png';

const Home = ({ navigation }) => {
  const navigate = (destination) => navigation.navigate(destination);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Browse</Text>
      <View style={styles.itemContainer}>
        <BrowseItem caption="View All Listings" icon={vinyl} />
        <BrowseItem
          caption="Browse by Genre"
          icon={mic}
          onSelect={() => navigation.navigate('Genres')}
        />
      </View>
    </View>
  );
};

export default Home;
