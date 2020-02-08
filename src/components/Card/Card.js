import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import styles from './CardStyle';

import { RegularText, BoldText } from '../DefaultText';
import OpacityButton from '../OpacityButton/OpacityButton';

import NumberFormater from '../../utils/NumberFormater';

const Card = props => {

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={props.imgUrl} style={styles.image} resizeMode='contain' />
            </View>
            <View style={styles.infos}>

                <View style={styles.title}>
                    <BoldText style={styles.titleText}>{props.title}</BoldText>
                </View>

                <View>
                    <BoldText style={styles.priceText}>{NumberFormater(props.price)}</BoldText>
                </View>

                <View style={styles.actionButtons}>

                    <OpacityButton buttonStyle={styles.detailsBtn} onPress={props.navigate} labelStyle={styles.btnText}>
                        Details
                    </OpacityButton>

                    <TouchableOpacity onPress={props.enableModal}>
                        <MaterialIcons name="add-shopping-cart" size={20} />
                    </TouchableOpacity>

                </View>

            </View>
        </View>
    );
};

export default Card;