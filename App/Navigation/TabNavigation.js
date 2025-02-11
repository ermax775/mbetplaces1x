import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from '../Screens/Home'
// import Search from '../Screens/Search'
import Fav from '../Screens/Fav'
import Profile from '../Screens/Profile'
import Search from '../Screens/Search'

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
// import Entypo from '@expo/vector-icons/Entypo';


const TabNavigation = () => {
    const Tab = createBottomTabNavigator();

  return (
     <Tab.Navigator screenOptions={ {
      headerShown: false
     } }>

      {/* Home */}
      <Tab.Screen name="Home" component={Home} options={{
        tabBarLabel : "MBet-Adera",
        // tabBarIcon : ({color}, {size}) => (),   ///  color = {color}, size = {size}

        tabBarIcon : ({color, size}) => (<MaterialCommunityIcons name="truck-delivery" color = {color} size={size} />),

        // tabBarIcon : ({color, size}) => (<Entypo name="home" size={24} color="black" />),

      }} />


{/* Search */}
      <Tab.Screen name="Search" component={Search} options={{
        tabBarLabel : "Search Spots",
        // tabBarIcon : ({color}, {size}) => (),

        tabBarIcon : ({color, size}) => (<MaterialCommunityIcons name="map-search" color = {color} size={size} />),

        // tabBarIcon : ({color, size}) => (<Entypo name="home" size={24} color="black" />),

      }} />


{/* Favorites */}
      <Tab.Screen name="Fav" component={Fav} options={{
        tabBarLabel : "Favorites",
        // tabBarIcon : ({color}, {size}) => (),

        tabBarIcon : ({color, size}) => (<MaterialIcons name="favorite" color = {color} size={size} />),

        // tabBarIcon : ({color, size}) => (<Entypo name="home" size={24} color="black" />),

      }} />


{/* Profiles */}
      <Tab.Screen name="Profile" component={Profile} options={{
        tabBarLabel : "My Profile",
        // tabBarIcon : ({color}, {size}) => (),

        tabBarIcon : ({color, size}) => (<FontAwesome name="user-circle-o" color = {color} size={size} />),

        // tabBarIcon : ({color, size}) => (<Entypo name="home" size={24} color="black" />),

      }} />


    </Tab.Navigator>

  //   <Tab.Navigator>
  //       <Tab.Screen name="Home" component={Home} />
  //       <Tab.Screen name="Profile" component={Profile} />
  // </Tab.Navigator>
  )
}

export default TabNavigation