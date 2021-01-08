import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { styles } from "../../stylesheets/appStyles.js";

export default function notificationScreen({ navigation }) { 

  return (
    <View style={styles.mainContainer}>
      
      {/* StatusBar */}
      <StatusBar style="auto" />

      {/* Actions container */}
      <View style={styles.pageContainer}>
        <Text style={styles.pageContainerTitle}>Actions</Text>
        <Text>Bag is added into Box A</Text>
        <Text>Box A opens</Text>
      </View>

    </View>
  );
}
