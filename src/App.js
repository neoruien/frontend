import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Card, Avatar, IconButton } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { styles } from "../stylesheets/appStyles.js";
import homeScreen from "./ui/homeScreen.js";
import addBoxScreen from "./ui/addBoxScreen.js"
import boxNavigationScreen from "./ui/boxNavigationScreen.js"
import { screenOptions } from "../constants/AppConstants";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator screenOptions={ screenOptions }>
        <Stack.Screen name="NOT Schrödinger's Box" component={homeScreen} /> 
        <Stack.Screen name="Add box" component={addBoxScreen} />
        <Stack.Screen name="boxNav" component={boxNavigationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

