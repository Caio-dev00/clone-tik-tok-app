import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import { Entypo } from "@expo/vector-icons";

interface ButtonNewProps {
  size: number;
}

export default function ButtonNew({size}: ButtonNewProps) {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Entypo name='plus' size={size} color='#000' />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    borderLeftWidth: 4,
    borderLeftColor: "#1ebfc7",
    borderRightWidth: 4,
    borderRightColor: "#f43071",
    borderRadius: 6
  },

  inner:{
    backgroundColor: "#FFF",
    padding: 1,
    paddingHorizontal: 6,
    borderRadius: 3
  }
})