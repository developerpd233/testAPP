import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import { Card, Header } from '../../../components'
import ProductCart from '../../../components/productCart'
import Toast from 'react-native-simple-toast';

const ProductShop = () => {
    const [countInc, setCountInc] = useState(0);
    const [countTwo, setCountTwo] = useState(0);

    let price = 550;
    finalPrice = countInc * price;

    let price2 = 500
    finalPrice2 = countTwo * price2

    let total = 0
    total = finalPrice + finalPrice2

   let delivery = 200

   finalAmount = total + delivery

    const plusHandle = () => {
        setCountInc(countInc >= 0 ? countInc + 1 : 0)

    }
    const incVal = () => {
        setCountTwo(countTwo >= 0 ? countTwo + 1 : 0)
    }
    const decVal = () => {
        setCountTwo(countTwo > 0 ? countTwo - 1 : 0)
    }
    const minusHandle = () => {
        setCountInc(countInc > 0 ? countInc - 1 : 0)

    }
    const submitHandle = () => {
        Toast.show('Checkout Successfully');
    }
    return (
        <View style={styles.main}>

            <View style={styles.header}><Header /></View>
            <View style={styles.heading}>
                <View style={{ marginVertical: 25 }}>
                    <Text style={styles.title}>Shopping Cart</Text>
                </View>
                <View>
                    <View style={styles.area}>

                    </View>
                </View>
                <View>
                    <ProductCart price={price} onPress2={() => plusHandle()} quantity={countInc} onPress={() => minusHandle()} />
                    <ProductCart price={price2} onPress2={() => incVal()} quantity={countTwo} onPress={() => decVal()} />
                </View>
                <View style={styles.p}>
                    <View style={styles.box}>
                        <Text style={styles.pc}>Product Code</Text>
                        <Text style={styles.pc}>+</Text>
                    </View>

                </View>
                <View style={styles.options}>
                    <View style={styles.checkbox}></View>
                    <Text style={styles.font}>Buy as a gift</Text>
                </View>

                <View style={styles.pm}>
                    <View style={styles.option}>
                        <Text style={styles.fonts}>Cart Sub Total</Text>
                        <Text style={styles.fonts}>Shopping</Text>
                        <Text style={styles.fonts}>Total</Text>

                    </View>
                    <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
                        <Text style={styles.fonts2}>{total}</Text>
                        <Text style={styles.fonts2}>{delivery}</Text>
                        <Text style={[styles.fonts2, { fontWeight: '800' }]}>{finalAmount}</Text>

                    </View>
                </View>
                <View style={{ alignItems: 'center', marginTop: 20 }}>
                    <TouchableOpacity style={styles.btn} onPress={()=>submitHandle()}>
                        <Text style={styles.co}>Proceed to checkout</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default ProductShop
