import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home'
import ReviewDetails from '../screens/reviewDetails'
import Header from '../shared/header'
import globalStyles from '../styles/globalStyles';

const Stack = createStackNavigator();


export default function HomeStack(){
  return (
        <Stack.Navigator>
          <Stack.Screen 
              name="Home" 
              component={Home}
              options={({navigation}) => ({
                headerTitle: () => <Header navigation={navigation} title={'GameZone'} />,
                headerBackground: () => (
                <Image source={require('../assets/images/game_bg.png')} style={globalStyles.headerImage} />
                ),
              }) }
          />
          <Stack.Screen 
              name="ReviewDetails" 
              component={ReviewDetails}
              options={{ title: 'Review Details'}}   
          />
        </Stack.Navigator>
  )
}