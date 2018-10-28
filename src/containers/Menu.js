import React, {Component} from 'react';
import styled from 'styled-components';
import posed, {Transition} from 'react-native-pose';
import { View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import Button from '../components/Button';

export default ({navigation, ...props}) => {
    return (
        <Content key="menu">
            <Logo />                
            <MenuItem onPress={() => navigation.navigate('test')}>Test</MenuItem>
            <MenuItem onPress={() => navigation.navigate('page 2')}>Page 2</MenuItem>                
        </Content>
    )
}

const Logo = styled.Image`
    height: ${moderateScale(100)};
    background: red;   
    margin-bottom: 10px; 
`

const Content = styled(posed.View({
    enter: { 
        opacity: 1, 
        beforeChildren: true,
        delayChildren: 800,
        staggerChildren: 50
    },
    preEnter: { opacity: 0 },
}))`
    padding: 10px;
`;

const MenuItem = styled(Button)`
    margin-bottom: 5px;
`