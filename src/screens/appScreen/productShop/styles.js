import { StyleSheet } from "react-native"
export const styles = StyleSheet.create({
    header: {
        height: 80,
        width: "100%",
    },
    title: {
        fontSize: 22,
        fontWeight: '800',
        color: '#000',
        textAlign: 'center'
    },
    box: {
        borderWidth: 0.5,
        borderColor: 'grey',
        height: 40,
        width: '92%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    pc: {
        fontSize: 15
    },
    checkbox: {
        height: 15,
        width: 15,
        borderWidth: 0.5,
        borderColor: '#000'
    },
    options: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    font: {
        fontSize: 12,
        marginLeft: 5
    },
    fonts: {
        fontSize: 10
    },
    fonts2: {
        fontSize: 14
    },
    heading: {
        backgroundColor: '#fff',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        flex: 1
    },
    pm: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 10,
        justifyContent: 'space-around'
    },
    co: {
        fontSize: 16,
        fontWeight: '800',
        color: '#fff',
        padding: 10,
        textAlign: 'center'
    },
    area: {
        height: 40,
        width: '100%',
        backgroundColor: '#ededed'
    },
    btn:
    {
        backgroundColor: '#d3ad40',
        width: '50%'
    },
    main: {
        flex: 1,
        backgroundColor: '#efefef'
    },
    p: {
        alignItems: 'center',
        marginVertical: 20
    },
    option: {
        flexDirection: 'column',
        justifyContent: 'space-between'
    }
})
