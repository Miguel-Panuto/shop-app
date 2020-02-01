import React from 'react';
import { } from 'react-native';
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

import Colors from '../constants/Colors';

const DefaultNavigatorOption = {
    headerStyle: {
        backgroundColor: Colors.mainColor
    }
}

const ShopNavigator = createStackNavigator({
    Shop: {
        screen: ShopScreen,
    },
    cart: {
        screen: CartScreen,
    },
    item: {
        screen: ItemScreen,
    },
}, {
    defaultNavigationOptions: DefaultNavigatorOption
});

const ManageNavigator = createStackNavigator({
    manage: {
        screen: ManageScreen,
    },
    addedit: {
        screen: AddEditScreen,
    },
}, {
    defaultNavigationOptions: DefaultNavigatorOption
});

const SectionsNavigator = createDrawerNavigator({
    shop: {
        screen: ShopNavigator
    },
    orders: {
        screen: OrdersScreen,
    },
    manage: ManageNavigator,
}, {
    defaultNavigationOptions: DefaultNavigatorOption
});

export default createAppContainer(SectionsNavigator)