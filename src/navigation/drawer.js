import React from 'react';
import { Platform } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ShopNavigator from './shop';
import ListingNavigator from './listings';
import DrawerList from '../components/drawer-list';
import Order from '../screens/orders';

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
    drawerContent={({ navigation }) => <DrawerList navigation={navigation} />}
  >
    <Drawer.Screen name="Home" component={ShopNavigator} />
    <Drawer.Screen
      name="My Listings"
      component={ListingNavigator}
      screenOptions={{ headerShown: false }}
    />
    <Drawer.Screen name="My Orders" component={Order} />
  </Drawer.Navigator>
);

export default DrawerNavigator;
