import React from 'react';
import { View, Text } from 'react-native'
import styled from 'styled-components';
import posed, { Transition } from 'react-native-pose';

export default ({children, contentKey}) => {
    console.log(contentKey)
    return (
    <Conatiner key="background">
        <Transition animateOnMount> 
            <BigCircle key='Big-circle' />
            <MediumCircle key='Medium-circle' />
            <SmallCircle key='Small-circle' />
            <Content key={contentKey}>
                {children}
            </Content>
        </Transition>        
    </Conatiner>
)};

const Conatiner = styled.View`
    background: ${props => props.theme.primaryLight};
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`

const Content = styled(posed.View({
    enter: { 
        scale: 1, 
        delay: 500,
        // beforeChildren: true,
        delayChildren: 750,
    },
    exit: { scale: 0 },
}))`
    margin: 20px;
    flex: 1;
    background: rgba(255,255,255,0.6);
    border-radius: 20px;
    box-shadow: 0px 2px 2px rgba(0,0,0,0.2);
    overflow: hidden;
`

const BigCircle = styled(posed.Image({
    enter: { scale: 1, delay: 150 },
    exit: { scale: 0 },
}))`
    background: ${props => props.theme.secondaryDark};
    position: absolute;
    top: -10px;
    left: -40px;
    width: 400px;
    height: 400px;
    border-radius: 200px;
`;

const MediumCircle = styled(posed.Image({
    enter: { scale: 1, delay: 300 },
    exit: { scale: 0 }
}))`
    background: ${props => props.theme.secondary};
    position: absolute;
    top: 300px;
    left: 200px;
    width: 280px;
    height: 280px;
    border-radius: 140px;
`;

const SmallCircle = styled(posed.Image({
    enter: { scale: 1, delay: 450 },
    exit: { scale: 0 }
}))`
    background: ${props => props.theme.secondaryLight};
    position: absolute;
    top: 340px;
    left: 50px;
    width: 140px;
    height: 140px;
    border-radius: 70px;
`;