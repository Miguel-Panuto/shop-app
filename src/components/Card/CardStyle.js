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
        fontSize: 16,
        color: '#5FC9AF'
    },
    priceText: {
        fontSize: 12,
        color: '#8F8F8F'
    },
    detailsBtn: {
        width: 70,
        height: 20,
        alignItems:'center',
        borderRadius: 10,
    },
    btnText: {
        fontSize: 12,
    }
});

export default styles;