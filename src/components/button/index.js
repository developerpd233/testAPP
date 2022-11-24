import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './style'

const Button = (props) => {
    const {btnText="Continue", onPress} = props
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.myText}>{btnText}</Text>
    </TouchableOpacity>
  )
}

export default Button