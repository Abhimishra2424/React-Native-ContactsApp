import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Text, View} from 'react-native';

const Login = () => {
  return (
    <View>
      <Text>Login screen</Text>
    </View>
  );
};

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
    <AuthStack.Navigator>
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="SignUp" component={SignUp} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
