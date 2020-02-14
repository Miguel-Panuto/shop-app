import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, Modal } from "react-native";
import { useDispatch } from 'react-redux';

import styles from './ModalCartStyle';

import { BoldText } from '../DefaultText'
import OpacityButton from '../OpacityButton/OpacityButton';

import NumberFormater from '../../utils/NumberFormater';

import { addToCart } from '../../store/actions/cartAction';

const ModalCart = ({ item, closeModal, visibility }) => {
    const [qtd, setQtd] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        setQtd('');
    }, [visibility]);

    const qtyHandler = qty => {
        qty.map(char => console.log(char))
        if (qty <= item.qty)
            return setQtd(qty);
        alert('Max quantity is ' + item.qty);
        return setQtd(item.qty);
    }

    return (
        <Modal
            visible={visibility}
            transparent={true}
        >
            <View style={styles.container}>
                <View style={styles.infoContainer}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.imageContainer}>
                            <Image source={item.imageUrl} style={styles.image} resizeMode="contain" />
                        </View>
                        <View style={styles.messageContainer}>
                            <View style={styles.rowAlignment}>
                                <BoldText style={styles.labels}>Price</BoldText>
                                <Text style={styles.inputStyle}>{NumberFormater(item.price)}</Text>
                            </View>
                            <View style={styles.rowAlignment}>
                                <BoldText style={styles.labels}>Qty</BoldText>
                                <TextInput
                                    style={styles.inputStyle}
                                    value={qtd.toString()}
                                    onChangeText={qtyHandler}
                                    keyboardType="number-pad"
                                    placeholder={`Max: ${item.qty}`}
                                />
                            </View>
                            <View style={styles.rowAlignment}>
                                <BoldText style={styles.labels}>Total</BoldText>
                                <Text style={styles.inputStyle}>{NumberFormater(item.price * qtd)}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <OpacityButton onPress={closeModal} buttonStyle={{ ...styles.cancelBtn, ...styles.btn }} labelStyle={styles.btnText}>
                        Cancel
                    </OpacityButton>
                    <OpacityButton buttonStyle={{ ...styles.addBtn, ...styles.btn }}
                        labelStyle={styles.btnText}
                        onPress={() => {
                            dispatch(addToCart(item.id, item.name, item.price, qtd, item.price * qtd, item.imageUrl))
                            closeModal();
                        }}>
                        Add to cart
                    </OpacityButton>
                </View>
            </View>
        </Modal>

    );
}


export default ModalCart;