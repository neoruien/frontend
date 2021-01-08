import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { HomeStackNavigator, NotificationStackNavigator, SearchStackNavigator } from "./stackNavigator.js";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="Notifications" component={NotificationStackNavigator} />
      <Tab.Screen name="Search" component={SearchStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;