import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import styles from '../styles/ShopStyle';

//Components
import Card from '../components/Card/Card.js';
import ModalCart from '../components/ModalCart/ModalCart'
import HeaderButton, { MaterialHeader } from '../components/HeaderButton';

//Datas
import { VEGETABLES } from "../data/DataPlaceHolder";
import { ScrollView } from 'react-native-gesture-handler';

const ShopScreen = ({ navigation }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [obj, setObj] = useState(VEGETABLES.find(item => item.id === 'a0'));

    const setModal = (item) => {
        if (isVisible === true) {
            return setIsVisible(false);
        }
        setObj(item);
        setIsVisible(true);
    }

    const renderItems = (item) => {
        return (
            <Card
                key={item.id}
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
                enableModal={() => setModal(item)}
            />
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Shop{'\n'}Now!</Text>
                <View style={styles.line} />
            </View>
            <ModalCart item={obj} visibility={isVisible} closeModal={() => setIsVisible(false)}/>
            <ScrollView contentContainerStyle={styles.cardsContainer}>
                {VEGETABLES.map(item => renderItems(item))}
                <View style={{marginBottom: 30}}/>
            </ScrollView>
        </View>
    )
}

ShopScreen.navigationOptions = ({ navigation }) => {
    return {
        headerTitle: '',
        headerLeft: () =>
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title="Menu" iconName="Menu" onPress={() => { navigation.toggleDrawer() }} />
            </HeaderButtons>,
        headerRight: () =>
        <HeaderButtons HeaderButtonComponent={MaterialHeader}>
            <Item title="Cart menu" iconName="shopping-cart" onPress={() => { navigation.navigate('Cart') }} />
        </HeaderButtons>
    }
}

export default ShopScreen;