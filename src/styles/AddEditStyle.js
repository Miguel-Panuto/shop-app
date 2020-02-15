import { StyleSheet } from 'react-native';

import Colors from '../constants/Colors';

const styles = StyleSheet.create({
    mainView: {
        backgroundColor: Colors.mainColor,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 40
    },
    input: {
        borderBottomColor: Colors.complementary,
        borderBottomWidth: 2,
        width: '80%',
        padding: 10,
        height: 40,
        fontFamily: 'noto-sans',
        fontSize: 14,
        color: Colors.textColor
    },
    inputDesc: {
        borderLeftColor: Colors.complementary,
        borderRightColor: Colors.complementary,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderRadius: 5,
        height: 150
    },
    stock: {
        flexDirection: 'row',
        width: '80%',
        justifyContent: 'space-between',
    },
    row: {
        flexDirection: 'row',
        width: '45%',
        justifyContent: 'space-between'
    },
    inputBottom: {
        width: '80%',
        paddingLeft: 2
    },
    label: {
        fontSize: 14,
        marginTop: 9
    },
    inputQty: {
        width: '45%'
    }  
});

export  default styles;