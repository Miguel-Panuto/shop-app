import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import { RegularText } from '../DefaultText';

import styles from './OpacityButtonStyles';

const OpacityButton = props => {
    return (
        <TouchableOpacity onPress={props.onPress} style={{...styles.btn, ...props.buttonStyle}}>
            <RegularText style={{...props.labelStyle}}>{props.children}</RegularText>
        </TouchableOpacity>
    );
};

export default OpacityButton;