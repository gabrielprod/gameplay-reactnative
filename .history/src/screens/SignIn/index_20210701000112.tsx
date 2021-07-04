import React, {useState} from "react";
import { View, Text, TextInput} from "react-native";
import { styles } from './styles'

export function SignIn() { 
    const [txtInput, setTxtInput] = useState('')

  return(
    <View style={styles.container}>
      <Text> Que coisa linda!</Text>

      <TextInput style={styles.input} onChangeText={setTxtInput}/>
      <Text>{txtInput}</Text>
    </View>
  )
}