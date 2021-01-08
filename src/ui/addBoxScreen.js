import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, TouchableOpacity, Button} from 'react-native';
import { styles } from "../../stylesheets/appStyles.js";
import box from '../models/box.js';
import FormField from "./FormField.js"
import QrReader from 'react-qr-reader'

function createNewBox(serialNum, name, location, data, navigation) { 
  const newBox = new box(serialNum, name, location, []);
  // push to database
  // fetch('https://mywebsite.com/endpoint/', {
  //   method: 'POST',
  //   headers: {
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify({
  //     serialNum: serialNum ,
  //     name: name,
  //     location: location,
  //     items: []
  //   })
  // }).then((response) => response.json())
  //   .then((json) => {
  //     return json.Result;
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });
  data.push(newBox);
  navigation.replace('Box data', {boxName : name});
}

export default function addBoxScreen({navigation, data, route}) { 
  const [serialNum, setSerialnum] = React.useState(route.params.serialNum == undefined ? '': route.params.serialNum);
  const [name, setName] = React.useState('');
  const [location, setLocation] = React.useState('');
  return (
    <View style={styles.mainContainer}>
      
      {/* StatusBar */}
      <StatusBar style="auto" />

      {/* Add box container */}
      <View style={styles.formContainer}>
        <FormField fieldName={'Serial Number: '} onChangeText={text => setSerialnum(text)} initialText={serialNum}/>
        <FormField fieldName={'Name: '} onChangeText={text => setName(text)} />
        <FormField fieldName={'Location: '} onChangeText={text => setLocation(text)} />
      </View>

      {/* Done button */}
      <TouchableOpacity onPress={() => navigation.replace('QR')} style={styles.button}>
        <Text style={styles.buttonText}>Scan Qr</Text>
      </TouchableOpacity>
      
      {/* Done button */}
      <TouchableOpacity onPress={() => createNewBox(serialNum, name, location, route.params.data, navigation)} style={styles.button}>
        <Text style={styles.buttonText}>Done</Text>
      </TouchableOpacity>
      
    </View>
  );
}
