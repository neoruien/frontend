import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { styles } from "../../stylesheets/appStyles.js";

export default function addBoxScreen({route, navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>add box Screen {route.params.id}</Text>
    </View>
  );
}