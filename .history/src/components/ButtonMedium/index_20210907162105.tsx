import React from "react";
import { Image, Text, View } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import DiscordImg from '../../assets/discord.png';
import { theme } from "../../global/styles/theme";
import { styles } from './styles';


type TitleProps = RectButtonProps & {
    title: string
    buttonConfirm: boolean
}

export function ButtonMedium({title, buttonConfirm, ...rest} : TitleProps) {
    return (
        
        <RectButton style={buttonConfirm ? styles.container : styles.containerwithoutConfirm }
          {...rest}
        >
            <Text style={styles.title}>
                {title}
            </Text>
        </RectButton>
    )
}