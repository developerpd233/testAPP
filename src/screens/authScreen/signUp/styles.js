import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
        backgroundColor:'#f0f8fd',
        height:'100%',
        // flex:1,

    },
    bg:{
        width:"100%",
        flex:1,
       backgroundColor:'#f0f8fd',
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
        marginTop:90,
    
    },
    form:{
        height:'40%',
        backgroundColor:'#fff',
        borderTopRightRadius:20,
        borderTopLeftRadius:20,
        marginTop:0,
        width:"100%",

    },
    inputTitle:{
        fontSize:14,
        fontWeight:'800',
        color:'#565656',
        marginBottom:5
    },
    formTitle:{
        fontSize:18,
        fontWeight:'800',
        color:'#c8d9e6',
        textAlign:'center',
        paddingTop:40
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