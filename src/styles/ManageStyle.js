import { StyleSheet } from 'react-native';

import Colors from '../constants/Colors';

const styles = StyleSheet.create({
    bg: {
        backgroundColor: Colors.mainColor,
        flex: 1,
    },
    cardsContainer: {
        marginVertical: 20,
        alignItems: 'center'
    }
});

export  default styles;