import {NavigationContainer} from '@react-navigation/native';
import {Text} from 'react-native';
import React from 'react';
import AuthNavigator from './AuthNavigator';
import HomeNavigator from './HomeNavigator';
import DrawerNavigator from './DrawerNavigator';

const AppNavContainer = () => {
  return (
    <NavigationContainer>
      {/* <AuthNavigator /> */}

      {/* <HomeNavigator /> */}

      <DrawerNavigator />
    </NavigationContainer>
  );
};

// screen > home > drawer
// screen > Auth >

export default AppNavContainer;
