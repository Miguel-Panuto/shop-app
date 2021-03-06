import { StyleSheet } from 'react-native';

import Colors from "../../constants/Colors";



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(20, 20, 20, 0.9)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    infoContainer: {
        flexDirection: 'row',
        width: 300,
        height: 200,
        backgroundColor: Colors.mainColor,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    imageContainer: {
        width: 110,
        height: 120,
        borderRadius: 2,
        marginLeft: 20,
        elevation: 3,
        position: 'relative',
        overflow: 'hidden',
        alignItems: 'center',
    },
    image: {
        flex: 1
    },
    messageContainer: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 10,
        flexDirection: 'column',   
    },
    rowAlignment: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    labels: {
        fontSize: 14,
        marginVertical: 10,
    },
    inputStyle: {
        flex: 1,
        marginHorizontal: 20,
        marginVertical: 10,
        fontFamily: 'noto-sans-bold',
        fontSize: 14,
        color: '#CCC',
        borderBottomWidth: 1,
        borderColor: '#6a6',
        borderRadius: 1,
        textAlign: 'right'
    },
    btn: {
        marginHorizontal: 20,
        marginVertical: -15,
        width: 100,
        justifyContent: 'center',
    },
    addBtn: {
        backgroundColor: '#3399ffef'
    },
    cancelBtn: {
        backgroundColor: '#ff1144ef'
    },
    btnText: {
        color: '#efefef',
        fontFamily: 'noto-sans-bold'
    }
});

export  default styles;