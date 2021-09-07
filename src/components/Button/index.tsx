import React from "react";
import { Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { styles } from './styles';


type TitleProps = RectButtonProps & {
    title: string
}

export function Button({title, ...rest} : TitleProps) {
    return (
        <RectButton style={styles.container} {...rest}>
            <Text style={styles.title}>
                {title}
            </Text>
        </RectButton>
    )
}