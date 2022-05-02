import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home';
import Products from '../screens/products';
import ProductDetails from '../screens/product-detail';
import Genres from '../screens/genres';
import DrawerNavigator from './drawer';

const Stack = createNativeStackNavigator();

const MainNavigator = () => (
  <Stack.Navigator initialRouteName="Drawer">
    <Stack.Screen
      name="Drawer"
      component={DrawerNavigator}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="Genres" component={Genres} />
    <Stack.Screen
      name="Album"
      component={Products}
      options={({ route }) => ({ title: route.params.name })}
    />
    <Stack.Screen
      name="AlbumDetail"
      component={ProductDetails}
      options={({ route }) => ({ title: route.params.name })}
    />
  </Stack.Navigator>
);

export default MainNavigator;
