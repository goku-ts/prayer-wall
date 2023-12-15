import React from 'react';



import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import { Home } from '../screens/Home';
import PrayerWall from '../screens/PrayerWall';
import Gratitude from '../screens/Gratitude';



type RootStackParamList = {
  Home: undefined;
  PrayerWall: undefined;
  Gratitude : undefined;
};


const Stack = createStackNavigator<RootStackParamList>();

export default function RootNavigation() {
  return (
    <>
    <NavigationContainer>
    <Stack.Navigator
        screenOptions={{
            headerShown: false,
            
        }}
        initialRouteName={'Home'}
        
    >
       
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="PrayerWall" component={PrayerWall} />
        <Stack.Screen name="Gratitude" component={Gratitude} />

    </Stack.Navigator>
</NavigationContainer></>

  );
}




