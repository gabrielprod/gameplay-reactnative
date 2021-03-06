import React from "react";
import { Text, View } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { categories } from "../../utils/categories";
import { GuildIcon } from "../GuildIcon";
import { styles } from './styles';
import PlayerSvg from '../../assets/player.svg'
import CalendarSvg from '../../assets/calendar.svg'
import { theme } from "../../global/styles/theme";
import { GuildProps } from '../Guild'
import {LinearGradient} from 'expo-linear-gradient'

export interface AppointmentProps {
  id: string
  guild: GuildProps
  category: string
  date: string
  description: string
}

type Props = RectButtonProps & {
  data: AppointmentProps
}

export function Appointment({ data, ...rest}: Props) {
    const [category] = categories.filter(categoriesData => categoriesData.id === data.category)
    const { primary, on, secondary50, secondary70 } = theme.colors
    const { owner } = data.guild

    return (
      <RectButton {...rest}
      >
        <View style={styles.container}>
          <LinearGradient
            style={styles.guildIconContainer}
            colors={[secondary50, secondary70]}
          >
            <GuildIcon/>
          </LinearGradient>


          <View style={styles.content}>
            <View style={styles.header}>

              <Text style={styles.title}>
                {data.guild.name}
              </Text>

              <Text style={styles.category}>
                {category.title}
              </Text>
            </View>
            
            <View style={styles.footer}>
              <View style={styles.dateInfo}>
                <CalendarSvg/>

                <Text style={styles.date}>
                  {data.date}
                </Text>
              </View>
            

              <View style={styles.playersInfo}>
                <PlayerSvg fill={data.guild.owner ? primary: on }/>

                <Text 
                  style={[
                    styles.players,
                    {color: owner ? primary: on} 
                  ]}>
                    {owner ? 'Anfitri??o' : 'Visitante'}
                </Text>
              </View>

            </View>
          </View>
        </View>
      </RectButton>
    )
}