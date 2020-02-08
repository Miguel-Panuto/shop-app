import React from 'react';
import { Text } from 'react-native';

import Colors from '../constants/Colors';

export const RegularText = props => {
    return <Text style={{ 
        fontFamily: 'noto-sans', 
        fontSize: 14,
        color: Colors.textColor, 
        ...props.style 
    }}>{props.children}</Text>
};

export const BoldText = props => {
    return <Text style={{ 
        fontFamily: 'noto-sans-bold', 
        fontSize: 18,
        color: Colors.textColor, 
        ...props.style 
    }}>{props.children}</Text>
};