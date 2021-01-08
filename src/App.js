import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./navigation/tabNavigator.js";

const App = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
};
export default App;