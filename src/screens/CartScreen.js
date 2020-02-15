import React, { useState, useEffect } from 'react';
import { ScrollView, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { BackButton } from '../components/HeaderButtons';
import CartItem from '../components/CartItem/CartItem';
import OpacityButton from '../components/OpacityButton/OpacityButton';
import { RegularText, BoldText } from '../components/DefaultText';

import styles from '../styles/CartStyle';
import { buyItem } from '../store/actions/itemAction';
import { cleanCart } from '../store/actions/cartAction';
import NumberFormater from '../utils/NumberFormater';

const CartScreen = ({ navigation }) => {
    const [totalPrice, setTotalPrice] = useState(0);
    const itemsCart = useSelector(state => state.cart.items);
    const dispatch = useDispatch();
    useEffect(() => {
        if (itemsCart.length) {
            if (itemsCart.length > 1) {
                const totalCost = itemsCart.reduce((acc, cur) => acc + cur.total, 0);
                return setTotalPrice(totalCost);
            }
            return setTotalPrice(itemsCart[0].total);
        }
    }, []);

    if (itemsCart.length <= 0 || !itemsCart)
        return <View style={{ ...styles.main, justifyContent: 'center', height: '100%' }}>
            <RegularText style={{ textAlign: 'center' }}>There is no items on cart!</RegularText>
        </View>

    const renderItems = item => {
        return <CartItem
            key={item.id}
            id={item.id}
            name={item.name}
            qty={item.qty}
            imageUrl={item.imageUrl}
            price={item.price}
            reload={() => navigation.navigate('Reload', { whatPage: 'Cart' })}
        />
    }

    return (
        <>
            <ScrollView style={styles.main}>
                <View style={{ marginTop: 35 }} />
                {itemsCart.map(item => {
                    return renderItems(item);
                })}
            </ScrollView>
            <View style={styles.totalContainer}>
                <BoldText>Sub-total: {NumberFormater(totalPrice)}</BoldText>
                <OpacityButton
                    buttonStyle={styles.btn}
                    labelStyle={styles.label}
                    onPress={() => {
                        dispatch(buyItem(itemsCart));
                        dispatch(cleanCart());
                        navigation.navigate('Reload', { whatPage: 'Shop' });
                    }}
                >
                    Next
                </OpacityButton>
            </View>
        </>
    );
};

CartScreen.navigationOptions = ({ navigation }) => {
    return {
        headerLeft: () => <BackButton onPress={() => navigation.pop()} />
    }
}

export default CartScreen;