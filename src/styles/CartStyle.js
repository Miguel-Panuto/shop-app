import { StyleSheet } from 'react-native';

import Colors from '../constants/Colors';

const styles = StyleSheet.create({
    main: {
        backgroundColor: Colors.mainColor,
    },
    totalContainer: {
        backgroundColor: Colors.mainColor,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 10,
        padding: 10
    },
    btn: {
        width: 90,
        backgroundColor: '#51e'
    },
    label: {
        fontFamily: 'noto-sans-bold',
        color: '#eee'
    }
});

export  default styles;