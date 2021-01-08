import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from "../../stylesheets/appStyles.js";
import box from '../models/box.js';
import FormField from "./FormField.js"

function createNewBox(serialNum, name, location, data, navigation) { 
  const newBox = new box(serialNum, name, location, []);
  // push to database 
  data.push(newBox);
  navigation.navigate('Box data', {boxName : name});
}

export default function addBoxScreen({navigation, data, route}) { 
  const [serialNum, setSerialnum] = React.useState('');
  const [name, setName] = React.useState('');
  const [location, setLocation] = React.useState('');
  return (
    <View style={styles.mainContainer}>
      
      {/* StatusBar */}
      <StatusBar style="auto" />

      {/* Add box container */}
      <View style={styles.formContainer}>
        <FormField fieldName={'Serial Number: '} onChangeText={ text => setSerialnum(text) }/>
        <FormField fieldName={'Name: '} onChangeText={text => setName(text)} />
        <FormField fieldName={'Location: '} onChangeText={text => setLocation(text)}/>
      </View>
      
      {/* Done button */}
      <TouchableOpacity onPress={() => createNewBox(serialNum, name, location, route.params.data, navigation)} style={styles.button}>
        <Text style={styles.buttonText}>Done</Text>
      </TouchableOpacity>
      
    </View>
  );
}
