import React, { useState } from 'react';
import { View, Image } from "react-native";
import { useSelector } from 'react-redux'

import { BackButton, CartButton } from '../components/HeaderButtons';
import OpacityButton from '../components/OpacityButton/OpacityButton';
import ModalCart from '../components/ModalCart/ModalCart';
import { RegularText, BoldText } from '../components/DefaultText';

import styles from '../styles/ItemStyle';

import NumberFormater from '../utils/NumberFormater';

const ItemScreen = ({ navigation }) => {
    const items = useSelector(state => state.items);
    const item = items.find(item => item.id === navigation.getParam('itemId'));
    const [isVisible, setIsVisible] = useState(false);
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={item.imageUrl} style={styles.image} resizeMode="cover" />
            </View>
            <ModalCart item={item} visibility={isVisible} closeModal={() => setIsVisible(false)} />
            <RegularText style={styles.desc}>{item.desc}</RegularText>
            <View style={styles.bottom}>
                <View style={{marginBottom: 35}}>
                    <BoldText style={styles.priceText}>{NumberFormater(item.price)}</BoldText>
                    <RegularText style={styles.priceText}>
                        Items on stock: <BoldText style={styles.priceText}>{item.qty}</BoldText>
                    </RegularText>
                </View>
                <OpacityButton buttonStyle={styles.cartBtn} onPress={() => setIsVisible(true)}>Add to cart</OpacityButton>
            </View>
        </View>
    );
};

ItemScreen.navigationOptions = ({ navigation }) => {
    return {
        headerTitle: navigation.getParam('title'),
        headerLeft: () =>
            <BackButton onPress={() => { navigation.pop() }} />,
        headerRight: () =>
            <CartButton onPress={() => { navigation.navigate('Cart') }} />
    }
}

export default ItemScreen;