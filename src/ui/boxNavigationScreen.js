import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Card, Avatar, IconButton } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { styles } from "../../stylesheets/appStyles.js";
import boxDataScreen from "./boxDataScreen.js"
import { screenOptions } from "../../constants/AppConstants";

const Stack = createStackNavigator();

export default function boxNavigationScreen() {
  return (
    <Stack.Navigator screenOptions={ screenOptions }>
      <Stack.Screen name="box" component={boxDataScreen} />
    </Stack.Navigator>
  )
}
