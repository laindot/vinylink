import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from '../components/header';
import Home from '../screens/home';
import Products from '../screens/products';
import ProductDetail from '../screens/product-detail';
import Genres from '../screens/genres';

const Stack = createNativeStackNavigator();

const ShopNavigator = () => (
  <Stack.Navigator
    initialRouteName="Homestack"
    screenOptions={{
      headerStyle: { height: 60 },
      headerMode: 'screen',
    }}
  >
    <Stack.Screen
      name="HomeStack"
      component={Home}
      options={{
        header: ({ navigation }) => (
          <Header navigation={navigation} title="Home" />
        ),
      }}
    />
    <Stack.Screen
      name="Genres"
      component={Genres}
      options={{
        header: ({ navigation }) => (
          <Header navigation={navigation} title="Genres" />
        ),
      }}
    />
    <Stack.Screen
      name="Listings"
      component={Products}
      options={{
        header: ({ navigation }) => (
          <Header navigation={navigation} title="Listings" />
        ),
      }}
    />
    <Stack.Screen
      name="ProductDetail"
      component={ProductDetail}
      options={{
        header: ({ navigation }) => (
          <Header navigation={navigation} title="Product" />
        ),
      }}
    />
  </Stack.Navigator>
);

export default ShopNavigator;
