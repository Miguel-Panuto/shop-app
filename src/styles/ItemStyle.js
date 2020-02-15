import { StyleSheet, Dimensions } from 'react-native';

import Colors from '../constants/Colors'
const WIDTH_SIZE = Dimensions.get('window').width - 100;

const styles = StyleSheet.create({
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
        marginHorizontal: 30,
        textAlign: 'justify',
    },
    
    bottom: {
      position: 'absolute',
      bottom: 0,
      marginBottom: 40,
      width: '100%',
    },
    priceText: {
        marginBottom: 10,
        marginLeft: 30,
        fontSize: 16,
        color: '#8F8F8F'
    },
    cartBtn: {
        alignSelf: 'center',
    },
});

export  default styles;