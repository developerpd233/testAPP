import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
        backgroundColor:'#fff',
        height:'100%'
        // flex:1
    },
    bg:{
        width:"100%",
        flex:1,
       backgroundColor:'#d5e2ea',
        margin:0,
        padding:0
    },
    logoText:{
        fontSize:20,
        fontWeight:'800',
        color:'#000'
    },
    logoText1:{
        fontSize:20,
        fontWeight:'600',
        color:'#000'
    },
    logo:{
        alignItems:'center',
        marginTop:60
    },
    form:{
        // height:200,
        backgroundColor:'#fff',
        borderTopRightRadius:20,
        borderTopLeftRadius:20,
        marginTop:-20,
        width:"100%",

    },
    inputTitle:{
        fontSize:14,
        fontWeight:'800',
        color:'#565656',
        margin:0
    },
    formTitle:{
        fontSize:18,
        fontWeight:'800',
        color:'#c8d9e6',
        textAlign:'center',
        padding:20
    },
    textInput:{
        width:'85%',
        alignSelf:'center',
        fontSize:8,
    },
    btn:{
        alignItems:'center',
        marginTop:40
    }
})