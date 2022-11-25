import { View, Text, Image } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'
import { styles } from './styles'
import { Profile } from '../../assets'

const Header = () => {
  return (
    <View style={styles.Header}>
     <View style={styles.left}>
     <Icon name='location' type='evilicon' size={24} color='grey' />
     <Text style={styles.home}>Home</Text>
     </View>
<Image source={Profile} style={{height:36, width:36, borderRadius:50}}  resizeMode="contain"/>
     {/* <Icon name='ios-people-circle-sharp' type='ionicon' size={50} color='grey' /> */}

    </View>
  )
}

export default Header