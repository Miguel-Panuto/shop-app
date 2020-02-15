import React, { useState, useEffect } from 'react';
import { View, KeyboardAvoidingView, TextInput } from 'react-native';

import styles from '../styles/AddEditStyle';
import OpacityButton from '../components/OpacityButton/OpacityButton';
import { BackButton } from '../components/HeaderButtons';
import { RegularText } from '../components/DefaultText'

const AddEditScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [price, setPrice] = useState('');
    const [qty, setQty] = useState('');
    const [id, setId] = useState();

    useEffect(() => {
        if (navigation.getParam('method') === 'Edit') {
            const item = (navigation.getParam('item'));
            setName(item.name);
            setDesc(item.desc);
            setPrice(item.price);
            setQty(item.qty);
            setId(item.id);
        }
    }, []);

    return (
        <KeyboardAvoidingView style={styles.mainView} behavior="height" enabled keyboardVerticalOffset="10">

            <TextInput
                style={styles.input}
                placeholder="Item name"
                value={name.toString()}
                onChange={value => setName(value)}
            />

            <TextInput
                style={{ ...styles.input, ...styles.inputDesc }}
                placeholder="Description"
                multiline={true}
                numberOfLines={5}
                value={desc.toString()}
                onChange={value => setDesc(value)}
            />
            <View style={styles.stock}>
                <View style={styles.row}>
                    <RegularText style={styles.label}>$</RegularText>
                    <TextInput
                        style={{ ...styles.input, ...styles.inputBottom }}
                        placeholder="Price"
                        value={price.toString()}
                        keyboardType="number-pad"
                        onChange={value => setPrice(value)}
                    />
                </View>
                <View style={styles.row}>
                    <RegularText style={styles.label}>Qty:</RegularText>
                    <TextInput
                        style={{ ...styles.input, ...styles.inputBottom }}
                        placeholder="Quantity"
                        keyboardType="number-pad"
                        value={qty.toString()}
                        onChange={value => setQty(parseInt(value))}
                    />
                </View>
            </View>

            <OpacityButton>{navigation.getParam('method')}</OpacityButton>
        </KeyboardAvoidingView>
    )
};

AddEditScreen.navigationOptions = ({ navigation }) => {
    return {
        headerTitle: navigation.getParam('method'),
        headerLeft: () =>
            <BackButton onPress={() => { navigation.pop() }} />,
    }
}

export default AddEditScreen;