import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './drawer';

const AppNavigation = () => (
  <NavigationContainer>
    <MainNavigator />
  </NavigationContainer>
);

export default AppNavigation;
