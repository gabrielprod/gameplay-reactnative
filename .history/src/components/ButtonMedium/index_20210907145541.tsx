import React from "react";
import { Image, Text, View } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import DiscordImg from '../../assets/discord.png';
import { theme } from "../../global/styles/theme";
import { useAuth } from "../../hooks/auth";
import { styles } from './styles';


type TitleProps = RectButtonProps & {
    title: string
    buttonConfirm: boolean
}

export function ButtonMedium({title, buttonConfirm, ...rest} : TitleProps) {
    const { signOut } = useAuth()

    return (
        
        <RectButton style={buttonConfirm ? styles.container : styles.containerwithoutConfirm } {...rest} onPress={signOut}>
            <Text style={styles.title}>
                {title}
            </Text>
        </RectButton>
    )
}