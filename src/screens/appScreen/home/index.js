import { View, Text, ImageBackground , TextInput , FlatList, RecyclerViewBackedScrollView} from 'react-native'
import React from 'react'
import { Header , Card, BotterBar } from '../../../components'
import { Banner } from '../../../assets'
import { styles } from './styles'
import {Icon} from 'react-native-elements'
const index = () => {
    const data =[
        {name:'Home Clean'} ,
        {name:'Electrition'} ,
        {name:'Gradening'} ,
        {name:'Carpenter'} ,
        {name:'Painter'} ,
        {name:'Plumber'} ,
        {name:'Movers'} ,
        {name:'Hair & Beauty'} ,
        {name:'Home Sanitize'} ,
        // {name:'Movers'} ,
        // {name:'Hair & Beauty'} ,
        // {name:'Home Sanitize'} ,
      


    ]
    return (
        <>
        <View style={{backgroundColor:'#fff' , flex:1}}>
            <ImageBackground source={Banner} style={{ height: 300, backgroundColor:'#ccedf9' , }} resizeMode='center'>
                <Header />
                <View style={{justifyContent:'center', alignItems:'center',marginTop:-25}}>
                    <Text style={styles.logoText}>Handy<Text style={styles.logoText1}>zone</Text></Text>
                </View>
                 <View style={{backgroundColor:'#fff' ,alignItems:'center',borderRadius:100,height:50 ,marginHorizontal:60,marginTop:50,flexDirection:'row',paddingHorizontal:20}}>
                     <Icon type='antdesign' name='search1' size={25} color='#999'  />
                    <TextInput style={{flex:1 ,}} placeholder='Search service' placeholderTextColor={'#000'} />
                 </View>
            </ImageBackground>
            <View style={{marginTop:5,marginHorizontal:20}}>
                <Text style={{color:'#000' , fontSize:16}}>
                    Popular Service
                </Text>
                <FlatList data={data}
                numColumns={3}
                // horizontal={false}
                
                renderItem={({item})=>{
                    return(
                            <Card name={item.name}/>

                    )
                }}/>
                
            </View>
        </View>
            <BotterBar/>
        </>


    )
}

export default index