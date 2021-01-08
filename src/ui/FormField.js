import React from 'react';
import { Text, View, TextInput } from 'react-native';
import { styles } from "../../stylesheets/appStyles.js";

export default FormField = ({ fieldName, onChangeText, initialText}) => { 
  return (
    <View style={styles.formFieldContainer}>
      <Text style={styles.formText} >
        {fieldName}
      </Text>
      <TextInput
        style={styles.formFieldText}
        onChangeText={onChangeText}
        value={ initialText }
      />
    </View>
  );
}