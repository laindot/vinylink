import React from 'react';
import { View, Text } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { styles } from './styles';

const DrawerList = ({ navigation }) => {
  return (
    <DrawerContentScrollView style={styles.container}>
      {/* <View style={styles.header}>
        <Text style={styles.caption}>pepito grillo</Text>
        <Text style={styles.caption}>pepitogrillo@gamil.com</Text>
      </View> */}
      <DrawerItem
        labelStyle={styles.title}
        label="Home"
        onPress={() => navigation.navigate('Home', { screen: 'HomeStack' })}
      />
      <DrawerItem
        labelStyle={styles.title}
        label="My Listings"
        onPress={() =>
          navigation.navigate('My Listings', { screen: 'userListings' })
        }
      />
      <DrawerItem
        labelStyle={styles.title}
        label="My Orders"
        onPress={() => navigation.navigate('Home', { screen: 'Orders' })}
      />
    </DrawerContentScrollView>
  );
};

export default DrawerList;
