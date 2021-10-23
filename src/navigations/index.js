import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import AuthNavigator from "./AuthNavigator";
import DrawerNavigator from "./DrawerNavigator";

const AppNavContainer = () => {
  const isLoggedIn = true;

  return (
    <NavigationContainer>
      {isLoggedIn ? <DrawerNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

// screen > home > drawer
// screen > Auth >

export default AppNavContainer;
