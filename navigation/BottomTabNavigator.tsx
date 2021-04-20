import { Entypo, Ionicons, EvilIcons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import AlbumScreen from '../components/AlbumScreen/AlbumScreen';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/HomeScreen';
import TabTwoScreen from '../screens/SearchScreen';
import { BottomTabParamList, HomeScreenList, SearchScreenList } from '../types';


const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => <Entypo name="home" size={30} color={color} style={{ marginBottom: -3 }} />,
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color }) => <EvilIcons name="search" size={30} color={color} style={{ marginBottom: -3 }} />,
        }}
      />

      <BottomTab.Screen
        name="Your Library"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="library" size={30} color={color} style={{ marginBottom: -3 }} />,
        }}
      />

      <BottomTab.Screen
        name="Spotify"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome5 name="spotify" size={30} color={color} style={{ marginBottom: -3 }} />,
        }}
      />
    </BottomTab.Navigator>
  );
}



const HomeStack = createStackNavigator<HomeScreenList>();

function HomeScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={TabOneScreen}
        options={{ headerTitle: 'Tab One Title' }}
      />
      <HomeStack.Screen 
        name="Album"
        component={AlbumScreen}
        options={{headerTitle: 'Album'}}
      />
    </HomeStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<SearchScreenList>();

function SearchScreen() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="Search"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </TabTwoStack.Navigator>
  );
}
