import React from 'react';
import { Platform } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ShopNavigator from './shop';
import ListingNavigator from './listings';
import { COLORS } from '../constants';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator
    initialRouteName="shopStack"
    screenOptions={{
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? COLORS.primaryColor : '',
      },
      headerTintColor:
        Platform.OS === 'android' ? 'white' : COLORS.primaryColor,
      headerTitleStyle: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 17,
      },
    }}
  >
    <Drawer.Screen name="ShopStack" component={ShopNavigator} />
    <Drawer.Screen name="ListingStack" component={ListingNavigator} />
  </Drawer.Navigator>
);

export default DrawerNavigator;
