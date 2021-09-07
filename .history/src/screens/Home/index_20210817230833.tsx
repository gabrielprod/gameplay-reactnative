import React, { useState } from 'react'
import { FlatList, View,Text } from 'react-native'
import { Profile } from '../../components/Profile'
import { styles } from './styles'
import { ButtonAdd } from '../../components/ButtonAdd'
import { CategorySelect } from '../../components/CategorySelect'
import { ListHeader } from '../../components/ListHeader'
import { Appointment } from '../../components/Appointment'
import { ListDivider } from '../../components/ListDivider'
import { Background } from '../../components/Background'
import { useNavigation } from '@react-navigation/native'


export function Home () {
  const [category, setCategory] = useState('')

  const navigation = useNavigation()

  function handleAppointmentDetails () {
    navigation.navigate('AppointmentDetails')
  }

  function handleAppointmentCreate(){
    navigation.navigate('AppointmentCreate')
  }

  const appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 as 20:40h',
      description: 'É hoje que eu jogo de Yasuo'
    },
    {
      id: '2',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 as 20:40h',
      description: 'É hoje que eu jogo de Yasuo'
    },
    {
      id: '3',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 as 20:40h',
      description: 'É hoje que eu jogo de Yasuo'
    },
    {
      id: '4',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 as 20:40h',
      description: 'É hoje que eu jogo de Yasuo'
    }
  ]

  function handleCategorySelected(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId)
  }

  return(
    <Background>
      <View style={styles.header}>
        <Profile/>
        <ButtonAdd onPress={handleAppointmentCreate}/>
      </View>

      <CategorySelect
        hasCheckBox={false}
        categorySelected ={category}
        setCategory={handleCategorySelected}
      />

      <ListHeader title="Partidas agendadas" subtitle="Total 6"/>

      <FlatList
        data={appointments}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
           <Appointment 
            data={item}
            onPress={handleAppointmentDetails}
          />
        )}
        ItemSeparatorComponent={() => <ListDivider/> }
        style={styles.matches}
        showsVerticalScrollIndicator={false}
      />
    </Background>
  )
} 