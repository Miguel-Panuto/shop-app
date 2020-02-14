import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import styles from './CardStyle';

import { RegularText, BoldText } from '../DefaultText';
import OpacityButton from '../OpacityButton/OpacityButton';

import NumberFormater from '../../utils/NumberFormater';

const Card = ({ item, navigate, enableModal }) => {

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={item.imageUrl} style={styles.image} resizeMode='contain' />
            </View>
            <View style={styles.infos}>

                <View style={styles.title}>
                    <BoldText style={styles.titleText}>{item.name}</BoldText>
                </View>

                <View style={styles.btnsAndInfo}>
                    <View>
                        <BoldText style={styles.priceText}>Qty: {item.qty}</BoldText>
                        <BoldText style={styles.priceText}>{NumberFormater(item.price)}</BoldText>
                    </View>

                    <View style={styles.actionButtons}>

                        <OpacityButton buttonStyle={styles.detailsBtn} onPress={navigate} labelStyle={styles.btnText}>
                            Details
                    </OpacityButton>

                        <TouchableOpacity onPress={enableModal}>
                            <MaterialIcons name="add-shopping-cart" size={20} />
                        </TouchableOpacity>

                    </View>

                </View>
            </View>
        </View>
    );
};

export default Card;