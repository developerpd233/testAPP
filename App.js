import React, {useEffect} from 'react';

import {Home, SignUp} from './src/screens';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import {Text, TouchableOpacity, View, Appearance, StyleSheet, ScrollView} from 'react-native';
import Tts from 'react-native-tts';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import ProductShop from './src/screens/appScreen/productShop';
import DetailShop from './src/screens/appScreen/detailShop';
import Sound from 'react-native-sound';
import {CHeader, CStories} from './src/components';
import {UserImage1} from './src/assets';

const App = () => {
  const data = [
    {
      userImg: UserImage1,
      userName: 'Abdullah',
    },
    {
      userImg: UserImage1,
      userName: 'Abdullah',
    },
    {
      userImg: UserImage1,
      userName: 'Abdullah',
    },
    {
      userImg: UserImage1,
      userName: 'Abdullah',
    },
    {
      userImg: UserImage1,
      userName: 'Abdullah',
    },
    {
      userImg: UserImage1,
      userName: 'Abdullah',
    },
    {
      userImg: UserImage1,
      userName: 'Abdullah',
    },
    {
      userImg: UserImage1,
      userName: 'Abdullah',
    },
  ];

  const colorScheme = Appearance.getColorScheme();
  console.log('🚀 ~ file: App.js:20 ~ App ~ colorScheme', colorScheme);

  const onPress = () => {
    Tts.speak(text);
  };

  const text =
    'Just the text content of the element and all its children, without CSS hidden text spacing and tags, except <script> and <style> elements. Just the text content of the element and all its children, without CSS hidden text spacing and tags, except <script> and <style> elements';

  return (
    //   <View style={{paddingHorizontal:10, justifyContent:'center'}}>

    //    <Text style={{paddingVertical:10}}>{text}</Text>
    //    <TouchableOpacity onPress={()=> onPress()} style={{backgroundColor:'blue', padding:10, width:120, borderRadius:10, alignItems:'center', }}>
    //   <Text style={{color:'#fff', fontWeight:'800'}}>Speak now</Text>
    //    </TouchableOpacity>

    // </View>
    <>
      <CHeader />
      {/* <ScrollView horizontal={true}> */}
      <View style={styles.storiesContainer}>
        {data.map(val => {
          return <CStories imgUrl={val?.userImg} userName={val?.userName} />;
        })}
      </View>
      {/* </ScrollView> */}
    </>
  );
};

export default App;
const styles = StyleSheet.create({
  storiesContainer: {
    flexDirection:'row',
    justifyContent:'space-between'
  }
});