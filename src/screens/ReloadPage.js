import React, { useEffect } from 'react';
import { View } from 'react-native';

const ReloadPage = ({ navigation }) => {
    useEffect(() => {
        const page = navigation.getParam('whatPage');
        setTimeout(() => {
            navigation.navigate(page)
        }, 1);
    })
    return (
        <View style={{flex: 1, backgroundColor: '#EBF5F2'}}/>
    )
}

export default ReloadPage;