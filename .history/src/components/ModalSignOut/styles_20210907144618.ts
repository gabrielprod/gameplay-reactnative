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
    marginTop: 19,
    textAlign: 'center'
  },
  title: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.title700,
    fontSize: 20,
  
  },
  complementTitle: {
    color: theme.colors.primary,
    fontFamily: theme.fonts.title700,
    fontSize: 20,
    textAlign: 'center',
  },
  footer:{
    flexDirection: 'row',
  },
  border:{
    width:142,
    marginRight: 14,
    borderWidth:1,
    borderColor: theme.colors.heading,
    borderRadius: 8,
  }
})