import { StyleSheet, Dimensions } from 'react-native';

const WIDTH_SIZE = Dimensions.get('window').width - 30;

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        width: WIDTH_SIZE,
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
        borderRadius: 2,
        marginHorizontal: 20,
        elevation: 3,
        position: 'relative',
        overflow: 'hidden',
        alignItems: 'center',
    },
    image: {
        flex: 1
    },
    infos: {
        flex: 1,
        flexDirection: 'column'
    },
    title: {
        height: '50%',
        marginTop: 5
    },
    actionButtons: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 20
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

export default styles;