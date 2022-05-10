import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './drawer';
import AuthNavigator from './auth';

const AppNavigation = () => {
  const isAuth = useSelector((state) => state.auth.userId);
  return (
    <NavigationContainer>
      {isAuth ? <MainNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigation;
