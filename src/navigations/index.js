import { NavigationContainer } from "@react-navigation/native";
import React, { useContext } from "react";
import { GlobalContext } from "../context/provider";
import AuthNavigator from "./AuthNavigator";
import DrawerNavigator from "./DrawerNavigator";

const AppNavContainer = () => {
  const {
    authState: { isLoggedIn },
  } = useContext(GlobalContext);
  console.log(`isLoggedIn`, isLoggedIn);

  return (
    <NavigationContainer>
      {isLoggedIn ? <DrawerNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

// screen > home > drawer
// screen > Auth >

export default AppNavContainer;
