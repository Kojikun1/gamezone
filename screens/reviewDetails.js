import React from 'react';
import {View, Text,Button, Image} from 'react-native';
import globalStyles from '../styles/globalStyles';
import Card from '../shared/card'


function getImages(id){
     let arrayImages = [
         {id: 1, source: require('../assets/images/rating-1.png')},
         {id: 2, source: require('../assets/images/rating-2.png')},
         {id: 3, source: require('../assets/images/rating-3.png')},
         {id: 4, source: require('../assets/images/rating-4.png')},
         {id: 5, source: require('../assets/images/rating-5.png')},
     ];
     let result = arrayImages.filter( item => item.id == id);
     return result[0].source;
}


export default function reviewDetails({route, navigation}){
    const {title, body, rating} = route.params;

    return (
        <View style={globalStyles.container}>
        <Card>
            <Text>{ title }</Text>
            <Text>{ body }</Text>
            <Image source={getImages(rating)} />
        </Card>
        </View>
    )
}