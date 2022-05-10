import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Auth from '../screens/auth';
import Header from '../components/header';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator
    initialRouteName="Auth"
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen
      name="Auth"
      component={Auth}
      // options={{
      //   header: ({ navigation }) => (
      //     <Header navigation={navigation} title="Login" />
      //   ),
      // }}
    />
  </Stack.Navigator>
);

export default AuthNavigator;
