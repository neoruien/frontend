import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { styles } from "../../stylesheets/appStyles.js";

export default function searchScreen({ navigation }) { 

  return (
    <View style={styles.mainContainer}>
      
      {/* StatusBar */}
      <StatusBar style="auto" />

      {/* Search container */}
      <View style={styles.tallPageContainer}>
        <Text style={styles.pageContainerTitle}>Search</Text>
      </View>

    </View>
  );
}
