import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { Image } from 'react-native'
import { Img5 } from '../../assets'

const index = ({name}) => {
  return (
    <View style={styles.mainView}>
        <View style={{flexDirection:'row' , alignItems:'center' , justifyContent:'space-between' , marginVertical:10, marginHorizontal:5}}>
    <Text style={{ marginLeft:-10,  marginTop:35,  fontSize:12, fontWeight:'700',transform: [{ rotate: '-90deg'}]}}>{name}</Text>
    <View style={{position:'absolute' , top:'75%' , left:'50%' , right:0 , bottom:0,}}>

    <Image source={Img5} style={styles.img} resizeMode="contain"/>
    </View>


        </View>

      {/* <View style={styles.middleView}>


      {/* </View> */}

    </View>
  )
}

export default index