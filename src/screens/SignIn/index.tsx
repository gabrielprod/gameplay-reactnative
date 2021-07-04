import React, {useState} from "react";
import { View, Text, Image, StatusBar} from "react-native";
import { styles } from './styles'
import illustrationImg from '../../assets/illustration.png'

export function SignIn() { 
    const [txtInput, setTxtInput] = useState('')

  return(
    <View style={styles.container}>
      <StatusBar
        barStyle='light-content'
      />
      <Image 
        source={illustrationImg}
        style={styles.image}
        resizeMode='stretch'
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Organize {`\n`}
          suas jogatinas {`\n`}
          facilmente
        </Text>

        <Text style={styles.subtitle}>
          Crie grupo para jogar seus games {`\n`}
          favoritos com seus amigos
        </Text>
      </View>
    </View>
  )
}