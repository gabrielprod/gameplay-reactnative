import React, { ReactNode } from 'react'
import { styles } from './styles'
import { LinearGradient } from 'expo-linear-gradient'
import { theme } from '../../global/styles/theme'

type Props = {
    children: ReactNode
}

export function Background ({ children }: Props){
    return (
        <LinearGradient 
            style={styles.container} 
            colors={['#D90404','#7D0202']}
        >
        {children}
        </LinearGradient>
    )
}
