import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { Icon } from 'react-native-elements'

const index = () => {
  return (
    <View style={styles.btnMain}>
        <TouchableOpacity style={styles.btn}>
     <Icon name='home-variant-outline' type='material-community' size={24} color='#6ac4fe'  />
     <Text style={styles.btnText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
     <Icon name='book-account-outline' type='material-community' size={24} color='#6ac4fe'  />
     <Text style={styles.btnText}>Booking</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
     <Icon name='chat-processing-outline' type='material-community' size={24} color='#6ac4fe'  />
     <Text style={styles.btnText}>Chats</Text>
        </TouchableOpacity>
    </View>
  )
}

export default index