import React from "react";
import { ScrollView, Text, View } from 'react-native';
import { categories } from "../../utils/categories";
import { Category } from "../Category";
import { styles } from './styles';


type Props = {
  title: string
  subtitle: string 
}

export function ListHeader({ title, subtitle}: Props) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          {title}
        </Text>

        <Text style={styles.subtitle}>
          {subtitle}
        </Text>
      </View>
    )
}