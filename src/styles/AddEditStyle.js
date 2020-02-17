import { StyleSheet } from 'react-native';

import Colors from '../constants/Colors';

const styles = StyleSheet.create({
    mainView: {
        backgroundColor: Colors.mainColor,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        borderBottomColor: Colors.complementary,
        borderBottomWidth: 2,
        width: '100%',
        paddingVertical: 10,
        height: 40,
        fontFamily: 'noto-sans',
        fontSize: 14,
        color: Colors.textColor,
        marginVertical: 20
    },
    inputContainer: {
        width: '80%',
        alignItems: 'flex-start',
    },
    btn: {
        backgroundColor: '#66F',
        alignSelf: 'center'
    },
    labelBtn: {
        color: '#EEE',
        fontWeight: 'bold'
    },
    inputDesc: {
        borderLeftColor: Colors.complementary,
        borderRightColor: Colors.complementary,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderRadius: 5,
        height: 150,
    },
});

export default styles;