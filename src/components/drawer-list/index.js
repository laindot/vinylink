import React from 'react';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { styles } from './styles';

const DrawerList = ({ navigation }) => {
  return (
    <DrawerContentScrollView>
      <DrawerItem
        labelStyle={styles.title}
        label="Home"
        onPress={() => navigation.navigate('Home', { screen: 'HomeStack' })}
      />
      <DrawerItem
        labelStyle={styles.title}
        label="My Listings"
        onPress={() => navigation.navigate('My Listings')}
      />
    </DrawerContentScrollView>
  );
};

export default DrawerList;
