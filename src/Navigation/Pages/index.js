import React, {Component} from 'react';
import { View, Text ,Button } from 'react-native';
import Background from '../../components/BackgroundContainer';
import Menu from '../../containers/Menu';
import Page from './Page';

export default class Pages extends Component{
    constructor(){
        super();
        this.state = {
            page: 'menu',
        }

        this.controls = {
            navigate: (page) => this.setState({page})
        }
    }

    render(){
        const { page } = this.state;
        return (
            <Background contentKey={page}>
{/*                 
                <Button title="menu" onPress={() => this.setState({page: "menu"})} />
                <Button title="home" onPress={() => this.setState({page: "home"})} />
                <Button title="something" onPress={() => this.setState({page: "something"})} /> */}
                {
                    (() => {
                        switch(page){
                            case 'menu':
                                return <Menu navigation={this.controls} />;
                            default:
                                return <Page navigation={this.controls}><Text>{page}</Text></Page>;
                        }
                        
                        // return 
                    })()
                }
                
            </Background>
        )
    }    
}