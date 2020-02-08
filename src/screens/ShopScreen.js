import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';

import styles from '../styles/ShopStyle';

//Components
import Card from '../components/Card/Card';
import ModalCart from '../components/ModalCart/ModalCart';
import { CartButton, MenuButton } from '../components/HeaderButtons';


import { BoldText } from '../components/DefaultText';

const ShopScreen = ({ navigation }) => {
    const items = useSelector(state => state.items);

    const [isVisible, setIsVisible] = useState(false);
    const [obj, setObj] = useState(items.find(item => item.id === 'a0'));

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
                <BoldText style={styles.headerText}>Shop{'\n'}Now!</BoldText>
                <View style={styles.line} />
            </View>
            <ModalCart item={obj} visibility={isVisible} closeModal={() => setIsVisible(false)} />
            <ScrollView contentContainerStyle={styles.cardsContainer}>
                {items.map(item => renderItems(item))}
                <View style={{ marginBottom: 30 }} />
            </ScrollView>
        </View>
    )
}

ShopScreen.navigationOptions = ({ navigation }) => {
    return {
        headerTitle: '',
        headerLeft: () =>
            <MenuButton onPress={() => { navigation.toggleDrawer() }} />,
        headerRight: () =>
            <CartButton onPress={() => { navigation.navigate('Cart') }} />
    }
}

export default ShopScreen;