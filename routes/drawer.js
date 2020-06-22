import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStack from './homeStack';
import AboutStack from './aboutStack'

const Drawer = createDrawerNavigator()


export default function MainContainer(){
    return(
        <NavigationContainer>
             <Drawer.Navigator  initialRouteName='HomeStack' >
                 <Drawer.Screen
                     name={'HomeStack'}
                     component={HomeStack}
                     options={{title: "Home"}}
                 />
                 <Drawer.Screen
                     name={'AboutStack'}
                     component={AboutStack}
                     options={{ title: "About"}}
                 />
             </Drawer.Navigator>
        </NavigationContainer>
    )
}