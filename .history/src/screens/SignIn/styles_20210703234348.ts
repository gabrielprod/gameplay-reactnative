import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height:360
    },
    title:{
        color: theme.colors.heading
    },
    subtitle: {
        color: theme.colors.heading
    }
})