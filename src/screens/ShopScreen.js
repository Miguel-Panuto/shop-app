import React from 'react';
import { View, Text } from 'react-native';

import { styles } from '../styles/ShopStyle';

//Components
import Card from '../components/Card/Card.js';

const ShopScreen = props => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Shop{'\n'}Now!</Text>
                <View style={styles.line} />
            </View>
            <View style={styles.cardsContainer}>
                <Card imgUrl={require('../../assets/images/cenoura.jpg')} title="Carrot" price="$ 3.00"/>
            </View>
        </View>
    )
}

ShopScreen.navigationOptions = ({ navigation }) => {
    return {
        headerTitle: '',
    }
}

export default ShopScreen;