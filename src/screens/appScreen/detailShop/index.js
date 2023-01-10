import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { Icon } from 'react-native-elements'

const DetailShop = () => {
    return (
        <View>
            <View style={styles.top}>
                <Icon type='materialIcons' name='arrow-back-ios' size={24} color='#000' />
                <Text style={styles.text} >Shopping Adress</Text>
                <View></View>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.text2}>
                    Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem ispum
                </Text>
            </View>
            <View style={{ paddingHorizontal: 10 }}>
                <Text style={styles.title}>Delivery Adress</Text>
            </View>
            <View>
                <View style={styles.card}>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Icon type='Ionicons' name='radio-button-on' size={16} color='#000' />
                    <Text style={{fontSize:16, color:'#000'}}>Alex Hales</Text>

                    </View>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Text style={{fontSize:12, color:'#000'}}>Edit</Text>
                    <Icon type='antdesign' name='edit' size={12} color='#000' />
                    </View>
                    

                </View>
                <View style={{flexDirection:'column', justifyContent:'flex-start', paddingHorizontal:10}}>
                        <Text>dummy adress</Text>
                        <Text>dummy adress</Text>
                        <Text>dummy adress</Text>
                        <Text>dummy adress</Text>
                        <Text>dummy adress</Text>
                        <Text>dummy adress</Text>
                    </View>
            </View>
        </View>
    )
}

export default DetailShop
