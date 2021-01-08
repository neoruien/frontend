import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { screenOptions } from "../../constants/AppConstants.js";
import homeScreen from "../ui/homeScreen.js";
import notificationScreen from "../ui/notificationScreen.js";
import searchScreen from "../ui/searchScreen.js";
import addBoxScreen from "../ui/addBoxScreen.js";
import boxDataScreen from "../ui/boxDataScreen.js";
import itemDataScreen from "../ui/itemDataScreen.js";
import addItemScreen from "../ui/addItemScreen.js";
import confirmAddItemScreen from "../ui/confirmAddItemScreen.js";
import QRCodeScanner from "../logic/QRCodeScanner.js"

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={ screenOptions }>
        <Stack.Screen name="NOT Schrödinger's Box" component={homeScreen} /> 
        <Stack.Screen name="Add a box" component={addBoxScreen} />
        <Stack.Screen name="Box data" component={boxDataScreen} />
        <Stack.Screen name="Item data" component={itemDataScreen} />
        <Stack.Screen name="Add an item" component={addItemScreen}/>
        <Stack.Screen name="Confirm add an item" component={confirmAddItemScreen}/>
        <Stack.Screen name="QR" component={QRCodeScanner}/>
    </Stack.Navigator>
  );
};

const NotificationStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={ screenOptions }>
      <Stack.Screen name="Notifications" component={notificationScreen} />
    </Stack.Navigator>
  );
};

const SearchStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={ screenOptions }>
        <Stack.Screen name="Search" component={searchScreen} />
      </Stack.Navigator>
    );
  };

export { HomeStackNavigator, NotificationStackNavigator, SearchStackNavigator };