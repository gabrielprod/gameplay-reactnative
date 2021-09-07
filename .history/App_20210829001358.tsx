import React from "react";
import { SignIn } from './src/screens/SignIn'
import { useFonts } from "expo-font";
import { Inter_400Regular, Inter_500Medium} from '@expo-google-fonts/inter'
import { Rajdhani_500Medium, Rajdhani_700Bold} from '@expo-google-fonts/rajdhani'
import AppLoading from 'expo-app-loading'
import { StatusBar, LogBox} from "react-native";
import { Background } from "./src/components/Background";
import { Home } from "./src/screens/Home";
import { Routes } from "./src/routes";
import { AuthContext, AuthProvider } from "./src/hooks/auth";

LogBox.ignoreLogs([
  'You are not currently signed in to Expo on your development machine.',
  'Cannot connect to the Metro server.'
])

export default function App() { 
  const[fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  })

  if(!fontsLoaded) {
    return <AppLoading/>
  }

  return(
    <Background>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      /> 
      <AuthProvider>
        <Routes/>
      </AuthProvider>
    </Background>
  )
}