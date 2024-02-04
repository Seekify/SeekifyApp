import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ListScreens from '../Screens/ListScreens/ListScreens';

const StackNav = createStackNavigator();

const ListStackNavigation = () => {
  return (
    <StackNav.Navigator
      initialRouteName="ListScreens"
      screenOptions={{headerShown: false}}>
      <StackNav.Screen name="ListScreens" component={ListScreens} />
    </StackNav.Navigator>
  );
};

export default ListStackNavigation;
