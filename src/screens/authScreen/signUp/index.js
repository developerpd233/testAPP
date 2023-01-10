import { View, Text, ImageBackground, ScrollView, TextInput, Switch } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import { Banner } from '../../../assets'
import { Icon } from 'react-native-elements'
import { Button, SocialTab } from '../../../components'
import { useDispatch } from 'react-redux'
import { themeAction } from '../../../redux/action/themeAction'

const SignUp = (props) => {
    const dispatch = useDispatch();
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => {
        if(isEnabled == true){
            setIsEnabled(false)
            dispatch(themeAction('light'))
        }else{
            setIsEnabled(true)
            dispatch(themeAction('dark'))
        }
    };
    return (
        <View style={styles.container}>
            <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
        <View style={styles.logo}>
        <Icon name='home' type='font-awesome' size={80} color='#6ac4fe' style={{paddingBottom:10}}/>
        <Text style={styles.logoText}>Handy<Text style={styles.logoText1}>zone</Text></Text>
        </View>
            <ImageBackground source={Banner} style={styles.bg} resizeMode="contain">
      </ImageBackground>
      {/* <ScrollView> */}
            <View style={styles.form}>
                <Text style={styles.formTitle}>Sign in now</Text>
                <View style={styles.textInput}>
                    <Text style={styles.inputTitle}>Phone Number</Text>
                    <TextInput placeholder='Enter Phone Number' style={{ borderBottomWidth: 0.8, borderColor: '#b2b2b2', padding: 0, fontSize: 13, fontWeight: '800' }} placeholderTextColor="#aaaaaa"></TextInput>
                </View>

                <View style={styles.btn}>
                    <Button onPress={()=>props?.navigation.navigate("home") }/>
                </View>
                <Text style={styles.formTitle}>Or Continue with</Text>
            </View>

            {/* </ScrollView> */}
            <SocialTab />
        </View>
    )
}

export default SignUp