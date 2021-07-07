import React, {useState} from "react";
import { View, Text, Image, StatusBar} from "react-native";
import { styles } from './styles'
import illustrationImg from '../../assets/illustration.png'
import { ButtonIcon } from '../../components/ButtonIcon'

export function SignIn() { 
  return(
    <View style={styles.container}>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      <Image 
        source={illustrationImg}
        style={styles.image}
        resizeMode='stretch'
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Conect-se e {`\n`}
          Organize {`\n`}
          suas jogatinas
        </Text>

        <Text style={styles.subtitle}>
          Crie grupo para jogar seus games {`\n`}
          favoritos com seus amigos
        </Text>

        <ButtonIcon title="Entrar com discord" activeOpacity={0.83}/>
      </View>
    </View>
  )
}