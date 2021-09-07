import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Alert } from "react-native";
import { Image, Text, View } from "react-native";
import illustrationImg from '../../assets/illustration.png';
import { Background } from "../../components/Background";
import { ButtonIcon } from '../../components/ButtonIcon';
import { useAuth } from "../../hooks/auth";
import { styles } from './styles';


export function SignIn() { 
  const { user, signIn} = useAuth()

  async function handleSignIn() {
    try{
      await signIn() 
    }catch(error:any){
      Alert.alert(error)
    }
  }

  return(
    <Background>
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

          <ButtonIcon 
            title="Entrar com discord"
            onPress={handleSignIn} 
          />
        </View>
      </View>
    </Background>
  )
}