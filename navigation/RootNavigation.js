import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import SettingsScreen from '../screens/SettingsScreen';
import { HomeStack } from './Navigation';
import { Feather,AntDesign,MaterialIcons } from 'react-native-vector-icons'
import FavouritesScreen from '../screens/FavouritesScreen';
import CartScreen from '../screens/CartScreen';

const Tab = createBottomTabNavigator();

const RootNavigation = () => {
    return (
    <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{ activeTintColor: "#000"}}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeStack} 
          options={{ 
            tabBarIcon : ({ color }) =><Feather name="home" size={26} color={color} />,
          }}
        />
        <Tab.Screen 
          name="Favourites" 
          component={FavouritesScreen} 
          options={{ 
            tabBarIcon : ({ color }) =><MaterialIcons name="favorite-border" size={26} color={color} />,
          }}
        />
        <Tab.Screen 
          name="Cart" 
          component={CartScreen} 
          options={{ 
            tabBarIcon : ({ color }) =><AntDesign name="shoppingcart" size={26} color={color} />
            }}
        />
        <Tab.Screen 
          name="Settings" 
          component={SettingsScreen} 
          options={{ 
            tabBarIcon : ({ color }) =><Feather name="settings" size={26} color={color} />
          }}
        />
      </Tab.Navigator> 
    )
}

export default RootNavigation
