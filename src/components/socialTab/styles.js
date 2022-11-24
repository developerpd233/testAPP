import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    socialView: {
        flexDirection: 'row',
        width:'100%',
        backgroundColor: '#6ac4fe',
        padding:20,
        borderTopRightRadius:20,
        borderTopLeftRadius:20,
        

    },
    leftBtn: {
        padding: 12,
        width:'50%',
        backgroundColor: '#6ac4fe',
        borderRightWidth:1,
        borderColor:'#fff',
        flexDirection:'row',
        justifyContent:'center',
        
    },
    rightBtn: {
        padding: 12,
        width:'50%',
        backgroundColor: '#6ac4fe',
        flexDirection:'row',
        justifyContent:'center',
    },
    btnText: {
        fontSize:14,
        fontWeight:'600',
        color:'white',
        paddingLeft:6
        }
    
})