import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { styles } from "../../stylesheets/appStyles.js";

export default function addBoxScreen({ navigation }) { 
  return (
    <View style={styles.mainContainer}>
      
      {/* StatusBar */}
      <StatusBar style="auto" />

      {/* Add box container */}
      <View style={styles.formContainer}>
        <Text style={styles.formText}>Serial Number: </Text>
        <Text style={styles.formText}>Name: </Text>
        <Text style={styles.formText}>Location: </Text>
      </View>
      
    </View>
  );
}
