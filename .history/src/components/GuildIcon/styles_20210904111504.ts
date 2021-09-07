import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";


export const styles = StyleSheet.create({
  container: {
    width: 61,
    height: 66,
    borderRadius: 8,
    backgroundColor: theme.colors.discord,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  },
  image: {
    width: 61,
    height: 66
  }
})