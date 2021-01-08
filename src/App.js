import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import homeScreen from "./ui/homeScreen.js";
import addBoxScreen from "./ui/addBoxScreen.js";
import boxDataScreen from "./ui/boxDataScreen.js";
import itemDataScreen from "./ui/itemDataScreen";
import addItemScreen from "./ui/addItemScreen";
import { screenOptions } from "../constants/AppConstants";

const Stack = createStackNavigator();

export default function App() {
  console.log("Hi");
  return (
    <NavigationContainer>
       <Stack.Navigator screenOptions={ screenOptions }>
        <Stack.Screen name="NOT Schrödinger's Box" component={homeScreen} /> 
        <Stack.Screen name="Add box" component={addBoxScreen} />
        <Stack.Screen name="Box data" component={boxDataScreen} />
        <Stack.Screen name="Item data" component={itemDataScreen} />
        <Stack.Screen name="Add item" component={addItemScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
