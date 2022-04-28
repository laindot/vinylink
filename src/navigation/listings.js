import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Platform } from 'react-native';
import MyListings from '../screens/my-listings';
import NewListing from '../screens/new-listing';
import { COLORS } from '../constants/index';

const Stack = createNativeStackNavigator();

const ListingNavigator = () => (
  <Stack.Navigator
    initialRouteName="MyListing"
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name="My Listings" component={MyListings} />
    <Stack.Screen name="New Listing" component={NewListing} />
  </Stack.Navigator>
);

export default ListingNavigator;
