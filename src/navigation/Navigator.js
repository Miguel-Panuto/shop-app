import React from 'react';
import { } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';

//Screens import
import ShopScreen from '../screens/ShopScreen';
import ItemScreen from '../screens/ItemScreen';
import CartScreen from '../screens/CartScreen';
import OrdersScreen from '../screens/OrdersScreen';
import ManageScreen from '../screens/ManageScreen';
import AddEditScreen from '../screens/AddEditScreen';
import ReloadPage from '../screens/ReloadPage';

import Colors from '../constants/Colors';

const DefaultNavigatorOption = {
    headerTintColor: Colors.textColor,
    headerStyle: {
        backgroundColor: Colors.mainColor,
        elevation: 0,
        shadowColor: 'transparent'
    },
    headerTitleStyle: {
        fontFamily: 'noto-sans-bold',
        fontSize: 14,
    },
    headerTitleAlign: 'center',
}

const ShopNavigator = createStackNavigator({
    Shop: {
        screen: ShopScreen,
    },
    Cart: {
        screen: CartScreen,
    },
    Item: {
        screen: ItemScreen,
    },
}, {
    defaultNavigationOptions: DefaultNavigatorOption,
});

const ManageNavigator = createStackNavigator({
    Manage: {
        screen: ManageScreen,
    },
    Addedit: {
        screen: AddEditScreen,
    },
    Item: {
        screen: ItemScreen
    }
}, {
    defaultNavigationOptions: DefaultNavigatorOption
});

const SectionsNavigator = createDrawerNavigator({
    Shop: {
        screen: ShopNavigator
    },
    Orders: {
        screen: OrdersScreen,
    },
    Manage: ManageNavigator,
}, {
    defaultNavigationOptions: DefaultNavigatorOption
});

const MainNav = createSwitchNavigator({
    Content: SectionsNavigator,
    Reload: ReloadPage
},{
    defaultNavigationOptions: {
        headerShown: false
    }
})

export default createAppContainer(MainNav)