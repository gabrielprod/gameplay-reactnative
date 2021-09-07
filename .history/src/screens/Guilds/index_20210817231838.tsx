import React from 'react'
import { View, FlatList } from 'react-native'
import { styles } from './styles'
import { Guild, GuildProps } from '../../components/Guild'
import { ListDivider } from '../../components/ListDivider'

type Props = {
  handleGuildSelected: (guild: GuildProps) => void
}

export function Guilds({handleGuildSelected}: Props) {
  const guilds = [
    {
      id: '1',
      nome: 'Lendarios',
      icon: 'image.png',
      owner: true
    },
    {
      id: '2',
      nome: 'Lendarios',
      icon: 'image.png',
      owner: true
    },
    {
      id: '3',
      nome: 'O bom De guerra',
      icon: 'image.png',
      owner: true
    },
    {
      id: '4',
      nome: 'Lendarios',
      icon: 'image.png',
      owner: true
    },  {
      id: '5',
      nome: 'Lendarios',
      icon: 'image.png',
      owner: true
    }
  ]

  return (
    <View style={styles.container}>
      <FlatList
        data={guilds}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Guild 
            data={item}
            onPress={() => handleGuildSelected(item)}
          />
        )}
        ItemSeparatorComponent={() => <ListDivider/>}
        contentContainerStyle={{paddingBottom: 69, paddingTop: 104}}
        style={styles.guilds}
      />
    </View>
  )
}