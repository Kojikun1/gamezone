import React from 'react';
import { StyleSheet, View, Text, Image,} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'


export default function Header({title, navigation}){
 
    function openMenu() {
        console.log("working");
        navigation.openDrawer();
    }

    const myIcon = <Icon name='align-justify' size={28} onPress={openMenu}  />
    return(
        <View style={styles.header} >
            <View style={styles.icon}  >
                {myIcon}
            </View>
             <View style={styles.headerTitle} >
                  <Image source={require('../assets/images/heart_logo.png')} style={styles.titleImage} />
                  <Text style={styles.title}>{title}</Text>
             </View> 
        </View>
    )
}
const styles = StyleSheet.create({
    header:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    title:{
        fontSize: 20,
    },
    headerTitle: {
        flexDirection: 'row',
        marginHorizontal: 100
    },
    titleImage: {
        width: 26,
        height: 26,
        marginHorizontal: 10
    },
    icon: {
        position: 'absolute',
        left: 16
    }
})