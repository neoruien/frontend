import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import ACTIONS from '../../data/actionData.js';
import { styles } from "../../stylesheets/appStyles.js";
import action from '../models/action.js';
import item from "../models/item.js"
import FormFields from "./FormField.js"

function createNewItem(serialNum, name, description, box, image, navigation) { 
  const newItem = new item(serialNum, name, description, box, image);
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
  //data.push(newBox);
  navigation.replace('Item data', {item : newItem});
}

export default function confirmAddItemScreen({ navigation, route }) { 
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [box, setBox] = React.useState('');
  return (
    <View style={styles.mainContainer}>
      <View style={styles.tallTopContainer}>
        <Image
            style={styles.bigimage}
            source={{uri: route.params.image}}
        />
      </View>

      {/* My Boxes container */}
      <View style={styles.shortPageContainer}>
        <FormField fieldName={'Name: '} onChangeText={text => setName(text)} />
        <FormField fieldName={'Description: '} onChangeText={text => setDescription(text)} />
        <FormField fieldName={'Box to add to: '} onChangeText={text => setBox(text)} />
        <TouchableOpacity onPress={() => {
          ACTIONS.push(new action(name + " is added to " + box));
          createNewItem(1, name, description, box, " ", navigation);
        }} style={styles.buttonBorder}>
          <Text style={styles.buttonText}>Done</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}