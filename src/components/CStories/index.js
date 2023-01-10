import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {UserImage1} from '../../assets';

const index = (props) => {
const {imgUrl, userName} = props
  return (
    <View style={styles.containerStyles}>
      <View style={styles.storiesImg}>
        <Image source={imgUrl} style={{width: '100%', height:'100%', borderRadius:50, resizeMode:'contain'}} />
      </View>
      <Text style={styles.userNameStyles}>{userName}</Text>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  containerStyles: {
    justifyContent:'center',
    alignItems:'center',
    marginHorizontal:3
  },
  storiesImg: {
height:70,
width:70,
borderWidth:2,
borderRadius:50,
borderColor:'yellow'
},
userNameStyles:{
    fontSize:12,
    color:'#000',
}
});
