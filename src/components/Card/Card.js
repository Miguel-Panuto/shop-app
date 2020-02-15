import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import styles from './CardStyle';

import { RegularText, BoldText } from '../DefaultText';
import OpacityButton from '../OpacityButton/OpacityButton';

import NumberFormater from '../../utils/NumberFormater';

const Card = (props) => {

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={props.item.imageUrl} style={styles.image} resizeMode='contain' />
            </View>
            <View style={styles.infos}>

                <View style={styles.title}>
                    <BoldText style={styles.titleText}>{props.item.name}</BoldText>
                </View>

                <View style={styles.btnsAndInfo}>
                    <View>
                        <BoldText style={styles.priceText}>Qty: {props.item.qty}</BoldText>
                        <BoldText style={styles.priceText}>{NumberFormater(props.item.price)}</BoldText>
                    </View>

                    <View style={styles.actionButtons}>

                        <OpacityButton buttonStyle={styles.detailsBtn} onPress={props.navigate} labelStyle={styles.btnText}>
                            Details
                    </OpacityButton>

                        <TouchableOpacity onPress={props.actionButton}>
                            <MaterialIcons name={props.iconName} size={20} />
                        </TouchableOpacity>

                    </View>

                </View>
            </View>
        </View>
    );
};

export default Card;