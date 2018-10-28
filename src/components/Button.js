import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styled from 'styled-components';
import { moderateScale } from 'react-native-size-matters';

export default class Button extends React.Component {
    render(){
        const {children, fontSize, ...props} = this.props;
        return (
            <Wrapper {...props}>
                <ButtonText fontSize={fontSize}>
                    {children}
                </ButtonText>
            </Wrapper>
        )
    }
}


const Wrapper = styled.TouchableOpacity`
    background: ${ props => props.color ? props.color : props.theme.primaryDark };
    padding: 10px;
    border-radius: 5px;
`;

const ButtonText = styled.Text`
    font-size: ${ props => props.fontSize ? props.fontSize : moderateScale(20) };
    color: ${ props => props.color ? props.color : props.theme.primaryLight };
`