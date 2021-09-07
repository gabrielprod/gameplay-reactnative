import React, {createContext, ReactNode, useContext} from 'react'
import { useState } from 'react'

import * as AuthSession from 'expo-auth-session'

import {
  REDIRECT_URI,
  SCOPE,
  RESPONSE_TYPE,
  CLIENT_ID,
  CDN_IMAGE
} from '../configs/discordAuth'
import { api } from '../services/api'

type User = {
  id: string
  username: string
  firstName: string
  avatar:string
  email: string
  token: string
}

type UserContextProvider = {
  user: User
  signIn: () => Promise<void>
}

type AuthProviderProps = {
  children: ReactNode
}

export const AuthContext = createContext({} as UserContextProvider)

function AuthProvider({children}: AuthProviderProps){
  const [user,setUser] = useState<User>({} as User)
  const [loading, setLoading] = useState(false)

  async function signIn(){
    try{
      setLoading(true)
      const authUrfl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`
      // starting authentication service and it needs a auhentication url
      const authUrl = 'https://discord.com/api/oauth2/authorize?client_id=879189374447804508&redirect_uri=https%3A%2F%2Fauth.expo.io%2Fgameplay&response_type=code&scope=identify%20email%20connections%20guilds'
      const response = AuthSession.startAsync({ authUrl })
      console.log(response)

    }catch{
      throw new Error('Nao foi possivel autenticar!')
    }
  }

  return (
    <AuthContext.Provider value={{user, signIn}}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth (){
  const context = useContext(AuthContext)
  return context
}

export{
  AuthProvider,
  useAuth
}