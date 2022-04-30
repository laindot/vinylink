import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home';
import Products from '../screens/products';
import ProductDetails from '../screens/product-detail';

const Stack = createNativeStackNavigator();

const ShopNavigator = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen
      name="Home"
      component={Home}
      options={{ headerShown: false }}
    />
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

export default ShopNavigator;
