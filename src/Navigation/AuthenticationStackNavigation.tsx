import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../Screens/AuthenticationScreens/LoginScreen';
const StackNav = createStackNavigator();

const AuthenticationStackNavigation = () => {
  return (
    <StackNav.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{headerShown: false}}>
      <StackNav.Screen name="LoginScreen" component={LoginScreen} />
    </StackNav.Navigator>
  );
};

export default AuthenticationStackNavigation;
