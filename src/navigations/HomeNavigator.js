import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View } from "react-native";
import {
  CONTACT_DETAIL,
  CONTACT_LIST,
  CREATE_CONTACT,
  SETTINGS,
} from "../constants/routeNames";
import ContactsScreen from "../screens/ContactsScreen";
import ContactDetailsScreen from "../screens/ContactDetailsScreen";
import CreateContactScreen from "../screens/CreateContactScreen";
import Settings from "../screens/Settings";

const HomeNavigator = () => {
  const HomeStack = createNativeStackNavigator();

  return (
    <HomeStack.Navigator initialRouteName="Contacts">
      <HomeStack.Screen name={CONTACT_LIST} component={ContactsScreen} />
      <HomeStack.Screen
        name={CONTACT_DETAIL}
        component={ContactDetailsScreen}
      />
      <HomeStack.Screen name={CREATE_CONTACT} component={CreateContactScreen} />
      <HomeStack.Screen name={SETTINGS} component={Settings} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
