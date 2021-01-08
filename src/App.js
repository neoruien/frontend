import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { styles } from "../stylesheets/appStyles.js";
import homeScreen from "./ui/homeScreen.js";
import detailsScreen from "./ui/addBoxScreen.js"

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={homeScreen} /> 
        <Stack.Screen name="Add box" component={detailsScreen} /> 
      </Stack.Navigator> 
    </NavigationContainer>
  )
}

