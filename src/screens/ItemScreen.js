import React from 'react';
import { View, Text, Image, TouchableOpacity } from "react-native";
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';

import { styles } from '../styles/ItemStyle'

import { VEGETABLES } from "../data/DataPlaceHolder";

const ItemScreen = ({ navigation }) => {
    const item = VEGETABLES.find(veg => veg.id === navigation.getParam('itemId'));
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={item.imageUrl} style={styles.image} resizeMode="cover" />
            </View>
            <Text style={styles.desc}>{item.desc}</Text>
            <View style={styles.bottom}>
                <Text style={styles.priceText}>{item.price}</Text>
                <TouchableOpacity style={styles.cartBtn}>
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
            </HeaderButtons>
    }
}

export default ItemScreen;