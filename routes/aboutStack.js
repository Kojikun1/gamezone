import React from 'react';
import {Image} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import About from '../screens/about'
import Header from '../shared/header'
const Stack = createStackNavigator();
import globalStyles from '../styles/globalStyles';


export default function AboutStack() {
    return (
            <Stack.Navigator>
                 <Stack.Screen
                    name='About'
                    component={About}
                    options={({navigation}) => ({
                        headerTitle: () => <Header navigation={navigation} title={'About'} />,
                        headerBackground: () => (
                        <Image source={require('../assets/images/game_bg.png')} style={globalStyles.headerImage} />
                        ),
                      }) }
                 />
            </Stack.Navigator>
    )
}