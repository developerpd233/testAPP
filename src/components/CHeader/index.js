import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'
import { InstaText , MsgIcon , AddIcon} from '../../assets'

const index = () => {
  return (
    <View style={styles.containerStyles}>
     <Image source={InstaText}  style={{height:34,width:100}}/>
     <View style={styles.headerIcons}>
     <Image source={AddIcon}  style={{height:24,width:24}}/>
     <Image source={MsgIcon}  style={{height:24,width:24}}/>
     </View>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
    containerStyles:{
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'white',
        paddingHorizontal:10,
        alignItems:'center'
    },
    headerIcons : {
        flexDirection:'row',
        justifyContent:'space-between',
    }
})