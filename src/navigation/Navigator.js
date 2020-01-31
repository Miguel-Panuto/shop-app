import React from 'react';
import {  } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';

//Screens import
import ShopScreen from '../screens/ShopScreen';
import ItemScreen from '../screens/ItemScreen';
import CartScreen from '../screens/CartScreen';
import OrdersScreen from '../screens/OrdersScreen';
import ManageScreen from '../screens/ManageScreen';
import AddEditScreen from '../screens/AddEditScreen';

const SectionsNavigator = createDrawerNavigator({
    shop: ShopNavigator,
    orders: {
        screen: OrdersScreen,
    },
    manage: ManageNavigator,
});

const ManageNavigator = createStackNavigator({
    manage: {
        screen: ManageScreen,
    },
    addedit: {
        screen: AddEditScreen,
    },
})

const ShopNavigator = createStackNavigator({
    shop : {
        screen: ShopScreen,
    },
    cart: {
        screen: CartScreen,
    },
    item: {
        screen: ItemScreen,
    },
});

export default createAppContainer(SectionsNavigator)