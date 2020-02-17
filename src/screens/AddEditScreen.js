import React, { useState, useEffect } from 'react';
import { View, KeyboardAvoidingView, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
import * as Permissions from 'expo-permissions';


import styles from '../styles/AddEditStyle';
import OpacityButton from '../components/OpacityButton/OpacityButton';
import { BackButton } from '../components/HeaderButtons';
import { RegularText, BoldText } from '../components/DefaultText';

import { addNewItem, editItem } from '../store/actions/itemAction';
import * as MediaLibrary from 'expo-media-library';

const AddEditScreen = ({ navigation }) => {
    const [method] = useState(navigation.getParam('method'));
    const [pg, setPg] = useState(0);
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [price, setPrice] = useState('');
    const [qty, setQty] = useState('');
    const [id, setId] = useState();

    useEffect(() => {
        setPg(0);
        if (method === 'Edit') {
            const item = (navigation.getParam('item'));
            setName(item.name);
            setDesc(item.desc);
            setPrice(item.price);
            setQty(item.qty);
            setId(item.id);
        }
    }, []);

    const dispatch = useDispatch();

    const InputField = props => {
        return (
            <>
                <TextInput
                    {...props}
                />
                <OpacityButton
                    buttonStyle={styles.btn}
                    labelStyle={styles.labelBtn}
                    onPress={() => setPg(pg + 1)}
                >
                    Next
                </OpacityButton>
            </>
        );
    };

    const NowInput = () => {
        if (pg === 0) { // Product name
            return (
                <View style={styles.inputContainer}>
                    <BoldText>Item name:</BoldText>
                    <InputField
                        onChange={value => setName(value)}
                        value={name}
                        placeholder="Insert item name here"
                        style={styles.input}
                    />
                </View>
            )
        }
        else if (pg === 1) { // Product description
            return (
                <View style={styles.inputContainer}>
                    <BoldText>Description:</BoldText>
                    <InputField
                        onChange={value => setDesc(value)}
                        multiline={true}
                        numberOfLines={10}
                        value={desc}
                        placeholder="Insert the description"
                        style={{ ...styles.input, ...styles.inputDesc }}
                    />
                </View>
            );
        }
        else if (pg === 2) { // Product image
            console.log(MediaLibrary.requestPermissionsAsync());
            console.log(MediaLibrary.getPermissionsAsync())
            return (
                <View >

                </View>
            )
        }
    };


    return (
        <KeyboardAvoidingView
            style={styles.mainView}
            behavior="height" enabled keyboardVerticalOffset="10"
        >
            <NowInput />
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