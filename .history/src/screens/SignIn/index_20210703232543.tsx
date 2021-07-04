import React, {useState} from "react";
import { View, Text, Image} from "react-native";
import { styles } from './styles'
import illustrationImg from '../../assets/illustration.png'

export function SignIn() { 
    const [txtInput, setTxtInput] = useState('')

  return(
    <View style={styles.container}>
      <Image 
        source={illustrationImg}
        style={styles.image}
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Organize {`\n`}
          suas jogatinas {`\n`}
          facilmente
        </Text>
      </View>
    </View>
  )
}