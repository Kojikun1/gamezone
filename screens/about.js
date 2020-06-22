import React from 'react';
import {StyleSheet,View, Text} from 'react-native';


export default function About({navigation}){
    return (
        <View style={styles.aboutContainer}>
            <Text style={styles.aboutText}>
                This is Game Review App {"\n"}
                Made By : Bruno
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    aboutContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    aboutText: {
        fontSize: 16
        ,
    }
})