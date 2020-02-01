import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 130,
        backgroundColor: '#F4FBF9',
        borderRadius: 10,
        elevation: 5,
        padding: 5,
        flexDirection: 'row'
    },
    imageContainer: {
        width: 110,
        height: 120,
        marginHorizontal: 20,
        elevation: 3
    },
    image: {
        width: 110,
        height: 120,
        borderRadius: 2,
    },
    infos: {
        flexDirection: 'column'
    },
    title: {
        height: '50%',
        marginTop: 5
    },
    actionButtons: {
        marginTop: 10,
        width: '57%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    titleText: {
        fontFamily: 'noto-sans-bold',
        fontSize: 14,
        color: '#5FC9AF'
    },
    priceText: {
        fontFamily: 'noto-sans-bold',
        fontSize: 12,
        color: '#8F8F8F'
    },
    detailsBtn: {
        backgroundColor: 'rgba(173, 84, 55, 0.4)',
        width: 70,
        height: 20,
        alignItems:'center',
        justifyContent: 'center',
        borderRadius: 10,
        elevation: 4
    },
    btnText: {
        fontFamily: 'noto-sans',
        fontSize: 12,
        color: '#4B4B4B'
    }
});