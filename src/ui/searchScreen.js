import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import { styles } from "../../stylesheets/appStyles.js";
import box from '../models/box.js';

  const send = (json, method) => { 
    return fetch('http://192.168.43.32:12345/frontend', {
      method: method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Content-Length': 105,
      },
      body: json
    })
  }

  const toggleLock= (lock, locate) => {
    return send(JSON.stringify({ type: 3, lock: lock, locate: locate }), 'POST').then(response => response.json()).catch(error => { console.log(error) });
  }

export default function searchScreen({ navigation }) { 

  const [value, setName] = React.useState('');

  var isLocked = true;

  return (
    <View style={styles.mainContainer}>
      
      {/* StatusBar */}
      <StatusBar style="auto" />

      {/* Search container */}
      <View style={styles.tallPageContainer}>
        <Text style={styles.pageContainerTitle}>Location</Text>
        <Text style={styles.searchText}>Name of item/box:</Text>
        <FormField onChangeText={text => setName(text)} />

        <View style={styles.lockContainer}>
          <TouchableOpacity onPress={() => toggleLock(true, false)} style={styles.buttonBorder}>
            <Text style={styles.buttonText}>Lock</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => toggleLock(false, false)} style={styles.buttonBorder}>
            <Text style={styles.buttonText}>Unlock</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <TouchableOpacity onPress={() => toggleLock(false,true)} style={styles.buttonBorder}>
          <Text style={styles.buttonText}>Find its location</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}
