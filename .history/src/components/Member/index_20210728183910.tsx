import React from 'react'
import { Fontisto } from '@expo/vector-icons'
import { FlatList, ImageBackground, Text, View } from 'react-native'
import { Background } from '../../components/Background'
import { Header } from '../../components/Header'
import { BorderlessButton } from 'react-native-gesture-handler'
import { theme } from '../../global/styles/theme'
import BannerImg from '../../assets/banner.png'
import { styles } from './styles'
import { ListHeader } from '../../components/ListHeader'
import { Avatar } from '../Avatar'

export type MemberProps = {
  id: string
  username: string
  avatar_url: string
  status: string
}

type Props = {
  data: MemberProps
}

export function Member({data} : Props) {
  const isOnline = data.status === 'online'

  return(
    <View style={styles.container}>
      <Avatar urlImage={data.avatar_url}/>

      <View>

        <Text style={styles.title}>
          {data.username}
        </Text>

        <View style={styles.status}>
          <Text style={styles.statusName}>
            {isOnline ? 'Disponível': 'Ocupado'}
          </Text>
        </View>

      </View>
    </View>
  )
}