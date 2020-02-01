import React from 'react';
import { StyleSheet } from 'react-native';

import Colors from '../constants/Colors'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.mainColor
    },
    header: {
        marginHorizontal: 20,
        marginVertical: 10
    },
    headerText: {
        fontFamily: 'noto-sans-bold',
        fontSize: 32,
        color: Colors.textColor
    },
    line: {
        height: 4,
        backgroundColor: '#1E705C',
        borderRadius: 2,
        marginTop: 10,
        elevation: 10
    },
    cardsContainer: {
        alignItems: 'center',
        marginTop: 20
    }
})