import React from 'react';

import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function FlatButton({ title, onPress}){
   return (
       <TouchableOpacity onPress={onPress}>
            <View style={styles.buttonStyle} >
               <Text style={styles.buttonTitle}>{title}</Text>
            </View>
       </TouchableOpacity>
   )
}


const styles = StyleSheet.create({
    buttonStyle: {
         borderWidth: 1,
         borderColor: '#ddd',
         borderRadius: 10,
         padding: 10,
         backgroundColor: '#F16749'
    },
    buttonTitle: {
       color: "#fff",
       textAlign: 'center',
       fontSize: 20,
    }
})