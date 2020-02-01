import React from 'react';
import { View, Text, FlatList } from 'react-native';

import { styles } from '../styles/ShopStyle';

//Components
import Card from '../components/Card/Card.js';

//Datas
import { VEGETABLES } from "../data/DataPlaceHolder";

const ShopScreen = props => {

    
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Shop{'\n'}Now!</Text>
                <View style={styles.line} />
            </View>
            <View style={styles.cardsContainer}>
                <FlatList 
                    data={VEGETABLES}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => <Card imgUrl={item.imageUrl} title={item.name} price={item.price} />}
                />
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