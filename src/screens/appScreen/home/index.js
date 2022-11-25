import { View, Text, ImageBackground , TextInput , FlatList, RecyclerViewBackedScrollView} from 'react-native'
import React from 'react'
import { Header , Card, BotterBar } from '../../../components'
import { Banner } from '../../../assets'
import { styles } from './styles'
import {Icon} from 'react-native-elements'
const Home = () => {
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
                <Header />
            <ImageBackground source={Banner} style={{ height: 160, backgroundColor:'#eff9fe' }} resizeMode="contain" >
                <View style={{justifyContent:'center', alignItems:'center',marginTop:-5}}>
                    <Text style={styles.logoText}>Handy<Text style={styles.logoText1}>zone</Text></Text>
                </View>
                 <View style={{backgroundColor:'#fff' ,alignItems:'center',borderRadius:100,height:40 ,marginHorizontal:100,marginTop:50,flexDirection:'row',paddingHorizontal:15}}>
                     <Icon type='antdesign' name='search1' size={18} color='#d3d7e1'  style={{marginRight:5}} />
                    <TextInput style={{flex:1 ,fontSize:12,}} placeholder='Search service' placeholderTextColor={'#bebebe'} />
                 </View>
            </ImageBackground>
            <View style={{marginTop:10,marginHorizontal:20,}}>
                <Text style={{color:'#5d5d5e' , fontSize:14, fontWeight:'600'}}>
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

export default Home