import React, { useEffect, useLayoutEffect } from 'react';
import { FlatList, View, Text } from 'react-native';
import { styles } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import ListingItem from '../../components/listing-item';
import { listingAction } from '../../store/actions';
import IonicIcons from 'react-native-vector-icons/Ionicons';

const MyListings = ({ navigation }) => {
  const dispatch = useDispatch();
  const listings = useSelector((state) => state.listings.listings);
  useEffect(() => {
    dispatch(listingAction.loadListing());
  }, []);
  const onSelectDetail = () => {
    navigation.navigate('PlaceDetail');
  };

  const renderItem = ({ item }) => (
    <ListingItem
      name={item.name}
      address={item.address}
      onSelect={() => onSelectDetail()}
      image={item.image}
    />
  );
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <IonicIcons
          name="menu"
          size={28}
          style={styles.menu}
          onPress={navigation.openDrawer}
        />
        <View>
          <Text style={styles.title}>My Listings</Text>
        </View>
        <IonicIcons
          name="add"
          size={28}
          style={styles.add}
          onPress={() => navigation.navigate('New Listing')}
        />
      </View>
      <FlatList
        data={listings}
        keyExtractor={(item) => item.Id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default MyListings;
