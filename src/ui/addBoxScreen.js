import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
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
      
      {/* Done button */}
      <TouchableOpacity onPress={() => navigation.navigate('Box data')} style={styles.button}>
        <Text style={styles.buttonText}>Done</Text>
      </TouchableOpacity>
      
    </View>
  );
}
