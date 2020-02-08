import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    bg: {
        flex: 1,
        backgroundColor: '#F4FBF9',
        height: 200,
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        paddingVertical: 20,
        marginHorizontal: 15,
        elevation: 5,
        borderRadius: 10,
        marginBottom: 30
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title:{
        fontSize: 14,
    },
    removeBtn: {
        width: 17,
        height: 17,
        backgroundColor: '#F93030DF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8.5,
        elevation: 3
    },
    removeLabel: {
        fontSize: 10,
        color: '#000'
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    imageContainer: {
        overflow: 'hidden',
        width: 130,
        height: 130,
        elevation: 3,
        position: 'relative',
        alignItems: 'center',
        borderRadius: 5,
    },
    image: {
        flex: 1
    },
    priceView: {
        justifyContent: 'space-between',
    },
    texts: {
        textAlign: 'right'
    }
});

export default styles;