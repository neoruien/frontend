import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import { styles } from "../../stylesheets/appStyles.js";

export default function searchScreen({ navigation }) { 

  const [value, onChangeText] = React.useState('Enter the name of an item/box...');

  return (
    <View style={styles.mainContainer}>
      
      {/* StatusBar */}
      <StatusBar style="auto" />

      {/* Search container */}
      <View style={styles.tallPageContainer}>
        <TextInput
          style={styles.searchText}
          onChangeText={text => onChangeText(text)}
          value={value}
        />
      </View>

      <TouchableOpacity onPress={console.log("")} style={styles.buttonBorder}>
        <Text style={styles.buttonText}>Find its location</Text>
      </TouchableOpacity>

    </View>
  );
}
