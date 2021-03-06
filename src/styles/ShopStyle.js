import { StyleSheet } from 'react-native';

import Colors from '../constants/Colors'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.mainColor
    },
    header: {
        marginHorizontal: 20,
        marginVertical: 10
    },
    headerText: {
        fontSize: 32,
    },
    line: {
        height: 4,
        backgroundColor: '#1E705C',
        borderRadius: 2,
        marginTop: 10,
        elevation: 10
    },
    cardsContainer: {
        marginVertical: 20,
        alignItems: 'center'
    },
});

export  default styles;