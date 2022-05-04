import React from 'react';
import { Platform } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ShopNavigator from './shop';
import ListingNavigator from './listings';
import { COLORS } from '../constants';
import Genres from '../screens/genres';
import Products from '../screens/products';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator
    initialRouteName="Home"
    screenOptions={{
      // headerStyle: {
      //   backgroundColor: Platform.OS === 'android' ? COLORS.primaryColor : '',
      // },
      // headerTintColor:
      //   Platform.OS === 'android' ? 'white' : COLORS.primaryColor,
      // headerTitleStyle: {
      //   fontFamily: 'OpenSans-Bold',
      //   fontSize: 17,
      // },
      headerShown: false,
    }}
  >
    <Drawer.Screen name="Home" component={ShopNavigator} />
    <Drawer.Screen name="My Listings" component={ListingNavigator} />
  </Drawer.Navigator>
);

export default DrawerNavigator;
