import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'


export const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop: 475
  },
  overlay: {
    flex: 1,
    backgroundColor: theme.colors.overlay
  },
  bar: {
    width:39,
    height: 2,
    borderRadius: 2,
    backgroundColor: theme.colors.secondary30,
    alignSelf: 'center',
    marginTop: 13
  },
  contentSignOut: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 26
  },
  headTitle: {
    flexDirection: 'row',
    
  },
  title: {
    flex: 1,
    color: theme.colors.heading,
    fontFamily: theme.fonts.text400,
    fontSize: 15,
    textAlign: 'center',
  },
  complementTitle: {
    flex: 1,
    color: theme.colors.primary,
    fontSize: 15,
    textAlign: 'center',
  },
  footer:{
    flexDirection: 'row',
  }
})