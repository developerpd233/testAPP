import { View, Text } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'
import { styles } from './styles'

const Header = () => {
  return (
    <View style={styles.Header}>
     <View style={styles.left}>
     <Icon name='location' type='evilicon' size={30} color='grey'  />
     <Text style={styles.home}>Home</Text>
     </View>

     <Icon name='ios-people-circle-sharp' type='ionicon' size={50} color='grey' />

    </View>
  )
}

export default Header