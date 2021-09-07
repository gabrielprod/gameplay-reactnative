import React from "react";
import { Image, View } from 'react-native';
import { styles } from "./styles";



export function GuildIcon() {
  const uri = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw3UYi5AQbc11vuvl8xHW6gzsGGs-i5p7fUw&usqp=CAU"

  return (
    <View>
      <Image 
        source={{uri}}
        style={styles.image}
        resizeMode="cover"
      />
    </View>
  )
}