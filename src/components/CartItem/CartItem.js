import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

import styles from './CartItemStyle';

import { RegularText, BoldText } from '../DefaultText';

import NumberFormater from '../../utils/NumberFormater';

const CartItem = props => {
    return (
        <View style={styles.bg}>
            <View style={styles.header}>
                <BoldText style={styles.title}>{props.name}</BoldText>
                <TouchableOpacity style={styles.removeBtn}>
                    <RegularText style={styles.removeLabel}>X</RegularText>
                </TouchableOpacity>
            </View>
            <View style={styles.infoContainer}>
                <View style={styles.imageContainer}>
                    <Image source={props.imageUrl} resizeMode="contain" style={styles.image} />
                </View>
                <View style={styles.priceView}>
                    <RegularText style={styles.texts}>{NumberFormater(props.price)}</RegularText>
                    <RegularText style={styles.texts}>Qty: {props.qty}x</RegularText>
                    <RegularText style={styles.texts}>Total: {NumberFormater((props.price * props.qty))}</RegularText>
                </View>
            </View>
        </View>
    )
};

export default CartItem;