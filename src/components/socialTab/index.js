import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { Icon } from 'react-native-elements'

const SocialTab = () => {
    return (
        <View style={styles.socialView}>
            <TouchableOpacity style={styles.leftBtn}>
                <Icon name='facebook' type='font-awesome' size={18} color='#fff' style={{ paddingRight: 6 }} />
                <Text style={styles.btnText}>Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rightBtn}>
                <Icon name='google' type='antdesign' size={18} color='#fff' style={{ paddingRight: 6 }} />
                <Text style={styles.btnText}>Google</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SocialTab