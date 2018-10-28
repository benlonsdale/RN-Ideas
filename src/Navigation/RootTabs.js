import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Pages from './Pages';
import theme from '../theme';



const Screen = ({text}) => (
    <View>
      <Text>This is the settings page</Text>
    </View>
  )

export default createBottomTabNavigator({
    Home: Pages,
    Settings: Screen,
},
{
    navigationOptions: ({navigation}) => ({
        swipeEnabled: true,
        tabBarOptions: {
            activeTintColor: theme.primaryLight,
            activeBackgroundColor: theme.primaryDark,
            style: {
                padding: 0,
            },
            tabStyle:{
                height: '100%',
            },
            labelStyle: {
                fontSize: 20,
                marginVertical: 'auto',
            },
            style: {
                backgroundColor: theme.primaryLight,
                
            },
        }
    })
}
);

