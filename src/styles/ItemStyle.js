import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

import Colors from '../constants/Colors'
const WIDTH_SIZE = Dimensions.get('window').width - 100;

export const styles = StyleSheet.create({
    container: {
        height: '100%',
        alignItems: 'center',
        backgroundColor: Colors.mainColor,
    },
    imageContainer: {
        marginVertical: 40,
        height: 230,
        width: WIDTH_SIZE,
        alignItems: 'center',
        overflow: 'hidden',
        borderRadius: 2,
        elevation: 5
    },
    image: {
        width: WIDTH_SIZE,
        height: '100%'
    },
    desc: {
        color: Colors.textColor,
        marginHorizontal: 30,
        textAlign: 'justify',
        fontSize: 12
    },
    
    bottom: {
      position: 'absolute',
      bottom: 0,
      marginBottom: 40,
      width: '100%',
    },
    priceText: {
        marginBottom: 45,
        marginLeft: 30,
        fontSize: 18,
        fontFamily: 'noto-sans-bold',
        color: '#8F8F8F'
    },
    cartBtn: {
        alignSelf: 'center',
        width: 130,
        height: 30,
        backgroundColor: '#B89284',
        borderRadius: 4,
        elevation: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnLabel: {
        fontFamily: 'noto-sans',
        fontSize: 14,
        color: Colors.textColor,
    }
})