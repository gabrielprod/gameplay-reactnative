import React from "react";
import { TouchableOpacity } from "react-native";

import { Text, Image, View} from 'react-native'
import DiscordImg from '../../assets/discord.png'
import { styles } from './styles'

interface TitleProps {
    title: string
}

export function ButtonIcon({title}: TitleProps) {
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.8}>
            <View style= {styles.iconWrapper}>
                <Image source={DiscordImg} style={styles.icon}/>
            </View>

            <Text style={styles.title}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}