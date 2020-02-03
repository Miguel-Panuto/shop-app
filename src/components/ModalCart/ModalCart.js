import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Modal } from "react-native";

import styles from './ModalCartStyle'

import NumberFormater from '../../utils/NumberFormater'

const ModalCart = ({ item, closeModal, visibility }) => {
    const [qtd, setQtd] = useState(1);

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
                                <Text style={styles.labels}>Price</Text>
                                <Text style={styles.inputStyle}>{NumberFormater(item.price)}</Text>
                            </View>
                            <View style={styles.rowAlignment}>
                                <Text style={styles.labels}>Qty</Text>
                                <TextInput
                                    style={styles.inputStyle}
                                    value={qtd.toString()}
                                    onChangeText={qty => setQtd(qty)}
                                    keyboardType="number-pad"
                                />
                            </View>
                            <View style={styles.rowAlignment}>
                                <Text style={styles.labels}>Total</Text>
                                <Text style={styles.inputStyle}>{NumberFormater(item.price * qtd)}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={closeModal} style={{ ...styles.cancelBtn, ...styles.btn }}>
                        <Text style={styles.btnText}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ ...styles.addBtn, ...styles.btn }}>
                        <Text style={styles.btnText}>Add to cart</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>

    );
}


export default ModalCart;