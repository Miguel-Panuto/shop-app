import React from 'react';
import { ScrollView, View } from 'react-native';
import { useSelector } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { BackButton } from '../components/HeaderButtons';
import CartItem from '../components/CartItem/CartItem';
import { RegularText } from '../components/DefaultText';

import styles from '../styles/CartStyle'

const CartScreen = props => {
    const itemsCart = useSelector(state => state.cart.items);

    if (itemsCart.length <= 0 || !itemsCart)
        return <View style={{ ...styles.main, justifyContent: 'center', height: '100%' }}>
            <RegularText style={{ textAlign: 'center' }}>There is no items on cart!</RegularText>
        </View>

    const renderItems = item => {
        return <CartItem
            key={item.id}
            name={item.name}
            qty={item.qty}
            imageUrl={item.imageUrl}
            price={item.price}
        />
    }
    return (
        <ScrollView style={styles.main}>
            <View style={{ marginTop: 35 }} />
            {itemsCart.map(item => renderItems(item))}
        </ScrollView>
    );
};

CartScreen.navigationOptions = ({ navigation }) => {
    return {
        headerLeft: () => <BackButton onPress={() => navigation.pop()}/>
    }
}

export default CartScreen;