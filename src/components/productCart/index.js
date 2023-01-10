import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { Shoe } from '../../assets'
import { Icon } from 'react-native-elements'

const ProductCart = (props) => {
    const {onPress, price, quantity, onPress2} = props
    return (
        <View style={styles.card}>
            <View style={{}}>
                <Image source={Shoe} resizeMode="cover" style={styles.img} />
            </View>
            <View style={{ marginLeft: '-30%' }}>
                <Text style={styles.pn}>Nike Red Shoes</Text>
                <Text style={styles.pp}>{price}</Text>
                <View style={styles.detail}>
                    <TouchableOpacity style={styles.btn1} onPress={onPress}>
                        <Text style={{ fontSize: 15 }}>-</Text>
                    </TouchableOpacity>
                    <View style={styles.textInput}>
                        <Text style={styles.ti}>{quantity}</Text>
                    </View>
                    <TouchableOpacity style={styles.btn2} onPress={onPress2}>
                        <Text style={{ fontSize: 15 }}>+</Text>
                    </TouchableOpacity>

                </View>
            </View>
            <View style={styles.lv}>
                <View style={styles.options}>
                    <Text style={{ fontSize: 12 }}>delete</Text>
                    <Icon type='antdesign' name='delete' size={14} color='#d3d7e1' style={{ marginRight: 5 }} />

                </View>
                <View style={styles.options}>
                    <Text style={{ fontSize: 12 }}>save</Text>
                    <Icon type='antdesign' name='hearto' size={14} color='#d3d7e1' style={{ marginRight: 5 }} />

                </View>
            </View>

        </View>
    )
}

export default ProductCart
