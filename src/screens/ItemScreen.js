import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from "react-native";
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton, { MaterialHeader } from '../components/HeaderButton';
import ModalCart from '../components/ModalCart/ModalCart';

import styles from '../styles/ItemStyle'

import { VEGETABLES } from "../data/DataPlaceHolder";

import NumberFormater from '../utils/NumberFormater'

const ItemScreen = ({ navigation }) => {
    const item = VEGETABLES.find(veg => veg.id === navigation.getParam('itemId'));
    const [isVisible, setIsVisible] = useState(false);
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={item.imageUrl} style={styles.image} resizeMode="cover" />
            </View>
            <ModalCart item={item} visibility={isVisible} closeModal={() => setIsVisible(false)}/>
            <Text style={styles.desc}>{item.desc}</Text>
            <View style={styles.bottom}>
                <Text style={styles.priceText}>{NumberFormater(item.price)}</Text>
                <TouchableOpacity style={styles.cartBtn} onPress={() => setIsVisible(true)}>
                    <Text style={styles.btnLabel}>Add to cart</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

ItemScreen.navigationOptions = ({ navigation }) => {
    return {
        headerTitle: navigation.getParam('title'),
        headerLeft: () =>
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title="Back button" iconName="BackBtn" onPress={() => { navigation.pop() }} />
            </HeaderButtons>,
        headerRight: () =>
        <HeaderButtons HeaderButtonComponent={MaterialHeader}>
            <Item title="Cart menu" iconName="shopping-cart" onPress={() => { navigation.navigate('Cart') }} />
        </HeaderButtons>
    }
}

export default ItemScreen;