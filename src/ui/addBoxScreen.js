import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { styles } from "../../stylesheets/appStyles.js";

export default function addBoxScreen({ navigation }) { 
  return (
    <View style={styles.container}>
      <Text>addBox</Text>
      <StatusBar style="auto" />
    </View>
  );
}
