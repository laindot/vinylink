import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, Button } from 'react-native';
import { styles } from './styles';
import { COLORS } from '../../constants';
import { useDispatch } from 'react-redux';
import { listingAction } from '../../store/actions';
import ImageSelector from '../../components/image-selector';

const NewListing = ({ navigation }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [picture, setPicture] = useState('');
  const [price, setPrice] = useState(0.3);
  const [address, setAddress] = useState('');

  const handleTitleChange = (text) => setTitle(text);
  const handlePriceChange = (text) => setPrice(text);
  const handleAddressChange = (text) => setAddress(text);
  const handlePostListing = () => {
    dispatch(listingAction.addListing(title, picture, price, address));
    navigation.navigate('My Listings');
  };
  const handleOnImage = (uri) => {
    setPicture(uri);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.label}>Name</Text>
        <ImageSelector onImage={handleOnImage} />
        <TextInput
          style={styles.input}
          onChangeText={handleTitleChange}
          value={title}
        />
        {/* <TextInput
          style={styles.input}
          onChangeText={handlePriceChange}
          value={price}
          keyboardType="numeric"
        /> */}
        <TextInput
          style={styles.input}
          onChangeText={handleAddressChange}
          value={address}
        />
        <Button
          title="Post Listing"
          onPress={() => handlePostListing()}
          color={COLORS.primaryColor}
        />
      </View>
    </ScrollView>
  );
};

export default NewListing;
