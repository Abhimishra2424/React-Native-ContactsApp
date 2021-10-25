import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View } from "react-native";
import { LOGIN, REGISTER } from "../constants/routeNames";
import Login from "../screens/Login";
import Register from "../screens/Register";

const SignUp = () => {
  return (
    <View>
      <Text>SignUp screen</Text>
    </View>
  );
};

const AuthNavigator = () => {
  const AuthStack = createNativeStackNavigator();
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen name={LOGIN} component={Login} />
      <AuthStack.Screen name={REGISTER} component={Register} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
