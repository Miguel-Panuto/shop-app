import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton, { MaterialHeader } from './HeaderButton';

export const BackButton = ({ onPress }) => {
    return (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="Back button" iconName="BackBtn" onPress={onPress} />
        </HeaderButtons>
    );
};

export const CartButton = ({ onPress }) => {
    return (
        <HeaderButtons HeaderButtonComponent={MaterialHeader}>
            <Item title="Cart menu" iconName="shopping-cart" onPress={onPress} />
        </HeaderButtons>
    );
};

export const MenuButton = ({ onPress }) => {
    return (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="Menu" iconName="Menu" onPress={onPress} />
        </HeaderButtons>
    )
}

export const AddButton = ({ onPress }) => {
    return (
        <HeaderButtons HeaderButtonComponent={MaterialHeader}>
            <Item title="Add" iconName="add-circle" onPress={onPress} />
        </HeaderButtons>
    )
}