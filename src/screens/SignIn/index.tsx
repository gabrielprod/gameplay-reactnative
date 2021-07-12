import React from "react";
import { Image, Text, View } from "react-native";
import illustrationImg from '../../assets/illustration.png';
import { ButtonIcon } from '../../components/ButtonIcon';
import { styles } from './styles';


export function SignIn() { 
  return(
    <View style={styles.container}>
      <Image 
        source={illustrationImg}
        style={styles.image}
        resizeMode='stretch'
      />

      <View style={styles.content}>
        <Text style={styles.title}> 
          Conecte-se {`\n`}
          e Organize suas{`\n`}
          jogatinas
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