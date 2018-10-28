import React from 'react';
import { createStackNavigator } from 'react-navigation';
import styled from 'styled-components';
import RootTabs from './RootTabs';

export default createStackNavigator({
    Home: {
        screen: RootTabs
    }
}, 
{
    navigationOptions: {
        header: () => <Header />
    }
});

const Header = styled.View`
    background-color: ${props => props.theme.primary};
    height: 30px;
`; 