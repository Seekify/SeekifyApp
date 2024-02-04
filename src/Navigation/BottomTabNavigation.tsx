import React, {useContext, useEffect} from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import { UserContext } from '../Context/UserContext';
import {List} from 'react-native-feather';
import ListStackNavigation from './ListStackNavigation';
import AuthenticationStackNavigation from './AuthenticationStackNavigation';

const Tab = createBottomTabNavigator()

const BottomTabNavigation = () => {

  const {grabUser, user} = useContext(UserContext); 

  useEffect(() => {
    grabUser();
  }, []);

  return (
    <NavigationContainer>
      {
        user != null
          ? (
              <Tab.Navigator screenOptions={{headerShown: false}}>
                <Tab.Screen
                  name="Lists"
                  key="Lists"
                  component={ListStackNavigation}
                  options={{
                    tabBarShowLabel: false,
                    // eslint-disable-next-line react/no-unstable-nested-components
                    tabBarIcon: ({size, color}) => (<List stroke={'black'} height={22} width={22} />),
                  }}/>
                {/* <Tab.Screen
                  name="Search"
                  key="Search"
                  component={SearchTabNavigation}
                  options={{
                    tabBarShowLabel: false,
                    // eslint-disable-next-line react/no-unstable-nested-components
                    tabBarIcon: ({size, color}) => (<Search stroke={'black'} height={22} width={22} />),
                  }}/>
                <Tab.Screen
                  name="Activity"
                  key="Activity"
                  component={ActivityTabNavigation}
                  options={{
                    tabBarShowLabel: false,
                    // eslint-disable-next-line react/no-unstable-nested-components
                    tabBarIcon: ({size, color}) => (<Activity stroke={'black'} height={22} width={22} />),
                  }}/>
                <Tab.Screen
                  name="Favorites"
                  key="Favorites"
                  component={FavoritesTabNavigation}
                  options={{
                    tabBarShowLabel: false,
                    // eslint-disable-next-line react/no-unstable-nested-components
                    tabBarIcon: ({size, color}) => (<Heart stroke={'black'} height={22} width={22} />),
                  }}/>
                <Tab.Screen
                  name="Profile"
                  key="Profile"
                  component={ProfileTabNavigation}
                  options={{
                    tabBarShowLabel: false,
                    // eslint-disable-next-line react/no-unstable-nested-components
                    tabBarIcon: ({size, color}) => (<User stroke={'black'} height={22} width={22} />),
                  }}/> */}
              </Tab.Navigator>
            )
          : <AuthenticationStackNavigation />
      }
    </NavigationContainer>
  )
}

export default BottomTabNavigation
