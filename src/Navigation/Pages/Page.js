import React, {Fragment} from "react";
import styled from 'styled-components';
import { TouchableOpacity, Text } from "react-native";
import { moderateScale } from 'react-native-size-matters'

// export default class Page extends React.Component {

// }

export default ({navigation, children}) => (
    <Fragment>
        <PageHeader navigation={navigation} />
        {children}
    </Fragment>
)

const PageHeader = ({navigation}) => (
    <HeaderContainer>
        <TouchableOpacity onPress={() => navigation.navigate('menu')}>
            <HeaderText>Back</HeaderText>
        </TouchableOpacity>
    </HeaderContainer>
)

const HeaderContainer = styled.View`
    background-color: ${props => props.theme.primaryDark};
    height: ${moderateScale(40)}px;
    flex-direction: row;
`

const HeaderText = styled.Text`
    color: ${props => props.theme.primaryLight}
    height: ${moderateScale(42)}px;
    padding: 9px 5px;
    font-size: ${moderateScale(20)}px;
`;