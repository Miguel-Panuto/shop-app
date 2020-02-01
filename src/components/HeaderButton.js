import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';

import McpIconpack from './Mcp-IconPack/McpIconpack';

const CustomHeaderButton = props => {
    return(
        <HeaderButton 
            {...props} 
            IconComponent={McpIconpack} 
            iconSize={28}
            color="#4B4B4B"
        />
    );
};

export default CustomHeaderButton;