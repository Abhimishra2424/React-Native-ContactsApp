import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Text, View} from 'react-native';

const ContactsScreen = () => {
  return (
    <View>
      <Text> hi from contact Screen</Text>
    </View>
  );
};

const ContactDetailsScreen = () => {
  return (
    <View>
      <Text> hi from ContactDetailsScreen</Text>
    </View>
  );
};

const CreateContactScreen = () => {
  return (
    <View>
      <Text> hi from CreateContactScreen</Text>
    </View>
  );
};

const Settings = () => {
  return (
    <View>
      <Text> hi from Settings</Text>
    </View>
  );
};

const HomeNavigator = () => {
  const HomeStack = createNativeStackNavigator();

  return (
    <HomeStack.Navigator  initialRouteName="Contacts">
      <HomeStack.Screen name="Contacts" component={ContactsScreen} />
      <HomeStack.Screen
        name="ContactDetails"
        component={ContactDetailsScreen}
      />
      <HomeStack.Screen name="CreateContact" component={CreateContactScreen} />
      <HomeStack.Screen name="Settings" component={Settings} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
