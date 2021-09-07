import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import { Text, Image, View} from 'react-native'
import DiscordImg from '../../assets/discord.png'
import { styles } from './styles'

type TitleProps = TouchableOpacityProps & {
    title: string
}

export function ButtonIcon({title, ...rest} : TitleProps) {
    return (
        <TouchableOpacity style={styles.container} {...rest}>
            <View style= {styles.iconWrapper}>
                <Image source={DiscordImg} style={styles.icon}/>
            </View>

            <Text style={styles.title}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}