import { Feather } from '@expo/vector-icons'
import React from 'react'
import { Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native'
import { theme } from '../../global/styles/theme'
import { GuildIcon } from '../GuildIcon'
import { styles } from './styles'

export type GuildProps = {
  id: string
  nome: string
  icon: string | null
  owner: boolean
}

type Props = TouchableOpacityProps & {
  data: GuildProps
}

export function Guild({data, ...rest}: Props) {
 

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      {...rest}
    >
      <GuildIcon/>

      <View style={styles.content}>
        <View>
          <Text style={styles.title}>
            {data.nome}
          </Text>

          <Text style={styles.type}>
            {data.owner ? 'Administrador' : 'Convidado'}
          </Text>
        </View>
      </View>

      <Feather
        name= "chevron-right"
        color= {theme.colors.heading}
        size= {24}
      />

    </TouchableOpacity>
  )
}