import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import { MaterialIcons } from '@expo/vector-icons';

import McpIconpack from './Mcp-IconPack/McpIconpack';

const HeaderButtonMcp = props => {
    return (
        <HeaderButton
            {...props}
            IconComponent={McpIconpack}
            iconSize={28}
            color="#4B4B4B"
        />
    );
};

export const MaterialHeader = props => {
    return (
        <HeaderButton
            {...props}
            IconComponent={MaterialIcons}
            iconSize={28}
            color="#4B4B4B"
        />
    )
}

export default HeaderButtonMcp;