import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyListings from '../screens/my-listings';
import NewListing from '../screens/new-listing';
import Header from '../components/header';

const Stack = createNativeStackNavigator();

const ListingNavigator = () => (
  <Stack.Navigator
    initialRouteName="userListings"
    // screenOptions={{ headerShown: false }}
  >
    <Stack.Screen
      name="userListings"
      component={MyListings}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="New Listing" component={NewListing} />
  </Stack.Navigator>
);

export default ListingNavigator;
