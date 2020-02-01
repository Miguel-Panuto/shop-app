import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { styles } from '../styles/ShopStyle';

//Components
import Card from '../components/Card/Card.js';
import HeaderButton from '../components/HeaderButton';

//Datas
import { VEGETABLES } from "../data/DataPlaceHolder";

const ShopScreen = ({ navigation }) => {

    const renderItens = ({ item }) => {
        return (
            <Card
                imgUrl={item.imageUrl}
                title={item.name}
                price={item.price}
                navigate={() =>
                    navigation.navigate({
                        routeName: 'Item',
                        params: {
                            itemId: item.id,
                            title: item.name
                        },
                    })
                }
            />
        )
    }

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
                    renderItem={renderItens}
                />
            </View>
        </View>
    )
}

ShopScreen.navigationOptions = ({ navigation }) => {
    return {
        headerTitle: '',
        headerLeft: () =>
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title="Menu" iconName="Menu" onPress={() => { navigation.toggleDrawer() }} />
            </HeaderButtons>
    }
}

export default ShopScreen;