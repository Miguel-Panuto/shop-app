import React, { useState } from 'react';
import { ScrollView, View, Text } from 'react-native';

import styles from '../styles/ManageStyle';

import { MenuButton, AddButton } from '../components/HeaderButtons';
import { useSelector } from 'react-redux';
import Card from '../components/Card/Card';

export const ManageScreen = ({ navigation }) => {
    const [userId, setUserId] = useState(0); //I will use redux and login system
    const fetchUserItems = useSelector(state => state.items.filter(item => item.userId === userId));

    const renderItem = item => {
        return (
            <Card
                key={item.id}
                item={item}
                iconName="edit"
                navigate={() =>
                    navigation.navigate({
                        routeName: 'Item',
                        params: {
                            itemId: item.id,
                            title: item.name
                        },
                    })
                }
                actionButton={() => navigation.navigate('Addedit', { 
                    method: 'Edit',
                    item: {
                        name: item.name,
                        desc: item.desc,
                        price: item.price,
                        qty: item.qty,
                        id: item.id
                    } 
                })}
            />
        )
    }

    return (
        <View style={styles.bg}>
            <ScrollView contentContainerStyle={styles.cardsContainer}>
                {fetchUserItems.map(item => renderItem(item))}
                <View style={{ marginBottom: 30 }} />
            </ScrollView>
        </View>
    );
};

ManageScreen.navigationOptions = ({ navigation }) => {
    return {
        headerLeft: () =>
            <MenuButton onPress={() => { navigation.toggleDrawer() }} />,
        headerRight: () =>
            <AddButton onPress={() => { navigation.navigate('Addedit', { method: 'Add' }) }} />
    }
}

export default ManageScreen;