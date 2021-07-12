import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export const styles = StyleSheet.create({
  container: {
    width: 53,
    height: 53,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 22
  },
  avatar: {
    width: 53,
    height: 53,
    borderRadius: 8
  }
})