import React, { useState, useEffect } from 'react';
import { View, TextInput } from 'react-native';

import styles from '../styles/AddEditStyle';

const AddEditScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [price, setPrice] = useState('');
    const [qty, setQty] = useState('');

    useEffect(() => {
        if(navigation.getParam('method') === 'Edit') {
            const item = (navigation.getParam('item'));
            setName(item.name);
            setDesc(item.desc);
            setPrice(item.price);
            setQty(item.qty);
        }
    }, [name, desc, price, qty]);

    return (
        <View style={styles.mainView}>
            <TextInput style={styles.input}/>
        </View>
    )
};

AddEditScreen.navigationOptions = ({ navigation }) => {
    return {
        headerTitle: navigation.getParam('method'),
    }
}

export default AddEditScreen;