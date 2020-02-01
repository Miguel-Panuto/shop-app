import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'

import { styles } from './CardStyle';

const Card = props => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={props.imgUrl} style={styles.image} resizeMode='cover' />
            </View>
            <View style={styles.infos}>

                <View style={styles.title}>
                    <Text style={styles.titleText}>{props.title}</Text>
                </View>

                <View>
                    <Text style={styles.priceText}>{props.price}</Text>
                </View>

                <View style={styles.actionButtons}>

                    <TouchableOpacity style={styles.detailsBtn}>
                        <Text style={styles.btnText}>Details</Text>    
                    </TouchableOpacity>

                    <MaterialIcons name="add-shopping-cart" size={20}/>
                    
                </View>

            </View>
        </View>
    );
};

export default Card;