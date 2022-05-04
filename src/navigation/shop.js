import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from '../components/header';
import Home from '../screens/home';
import Products from '../screens/products';
import ProductDetails from '../screens/product-detail';
import Genres from '../screens/genres';

const Stack = createNativeStackNavigator();

const ShopNavigator = () => (
  <Stack.Navigator
    initialRouteName="HomeStack"
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
      // options={({ route }) => ({ title: route.params.name })}
    />
    <Stack.Screen
      name="AlbumDetail"
      component={ProductDetails}
      options={({ route }) => ({ title: route.params.name })}
    />
  </Stack.Navigator>
);

export default ShopNavigator;
