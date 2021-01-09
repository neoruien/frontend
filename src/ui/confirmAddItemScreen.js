import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { styles } from "../../stylesheets/appStyles.js";
import item from "../models/item.js"
import FormFields from "./FormField.js"

function createNewItem(serialNum, name, description, box, navigation) { 
  const newItem = new item(serialNum, name, description, box);
  // push to database
  fetch('http://192.168.43.32:12345/frontend', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Content-Length': 105,
    },
    body: JSON.stringify({
      type: 2,
      serial_no: serialNum ,
      location : box,
      name: name,
      count: 1,
    })
  }).then((response) => {
    return response.json()
  }).then((json) => {
      console.log(json);
      return json.result;
    })
    .catch((error) => {
      console.error(error);
    });
  navigation.replace('Item data', {item : newItem});
}

function getSerialNum() { 
  fetch('http://192.168.43.32:12345/frontend/3', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Content-Length': 105,
    }
  }).then((response) => {
    return response.json()
  }).then((json) => {
      console.log(json.result);
      return json.result;
    })
    .catch((error) => {
      console.error(error);
    });
}

export default function confirmAddItemScreen({ navigation, route }) { 
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [box, setBox] = React.useState('');
  const [serialNumber, setSerialNumber] = React.useState(0);

  function getSerialNum() { 
    fetch('http://192.168.43.32:12345/frontend/3', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Content-Length': 105,
      }
    }).then((response) => {
      return response.json()
    }).then((json) => {
        setSerialNumber(json.result);
    }).catch((error) => {
        console.error(error);
    });
  }
  React.useEffect(() => getSerialNum(), []);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.tallTopContainer}>
        <Image
            style={styles.bigimage}
        />
      </View>

      {/* My Boxes container */}
      <View style={styles.shortPageContainer}>
        <FormField fieldName={'Name: '} onChangeText={text => setName(text)} />
        <FormField fieldName={'Description: '} onChangeText={text => setDescription(text)} />
        <FormField fieldName={'Box to add to: '} onChangeText={text => setBox(text)} />
        <TouchableOpacity onPress={() => createNewItem(serialNumber, name, description, box, navigation)} style={styles.buttonBorder}>
          <Text style={styles.buttonText}>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}