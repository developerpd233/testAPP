import { StyleSheet } from "react-native"
export const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderBottomWidth: 0.5,
        borderColor: '#ededed'
    },
    detail: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: '#d3ad40',
        borderWidth: 0.5,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        marginTop: 25

    },
    textInput: {
        backgroundColor: '#fff',
        height: 26,
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
    },
    options: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    pn: {
        fontSize: 15,
        fontWeight: '700',
        color: '#000'
    },
    pp: {
        fontSize: 12,
        fontWeight: '100',
        color: '#000'
    },
    btn1: {
        backgroundColor: '#efefef',
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        width: 30,
        height: 26,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btn2: {
        backgroundColor: '#efefef',
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        width: 30,
        height: 26,
        alignItems: 'center',
        justifyContent: 'center'
    },
    ti: {
        fontSize: 12,

    },
    img: {
        height: 80,
        width: 80
    },
    lv:{ flexDirection: 'column', justifyContent: 'space-between' }
})
