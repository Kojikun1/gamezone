import React,{ useState } from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity, Modal, TouchableWithoutFeedback,Keyboard } from 'react-native';
import Card from '../shared/card'
import globalStyles from '../styles/globalStyles';
import Icon from 'react-native-vector-icons/FontAwesome'
import ReviewForm from './reviewForm'


export default function Home({navigation}){
    const [modalState,setModalState] = useState(false);
    const [reviews,setReviews] = useState([
        {title: 'Zelda Breath of the Wild', rating: 5, body: "Game of The Year", key: '1'},
        {title: 'Super Mario Odyssey', rating: 4, body: "Good Game", key: '2'},
        {title: 'Splatoon 2', rating: 4, body: "Good Game", key: '3'}
    ]);
    function addReviews(review){
        review.key = Math.random().toString();
        setReviews((prevReviews) => [review,...prevReviews] )
        setModalState(false);
    }

    return (
        <View style={styles.container}>
            {/* Modal box inside the home and initi will press the of the plus on the home */}
            <Modal visible={modalState} animationType="slide">
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
                    <View style={styles.modalContent} >
                    
                        <View style={styles.modalToggle}>
                            <Icon name='times' size={28} color={'gray'} onPress={()=> setModalState(false)} />
                        </View>
                        {/*Form Component made with formik */}
                        <ReviewForm addReviews={addReviews} />
                    </View>
            </TouchableWithoutFeedback>
            </Modal>
        <View style={styles.modalToggle}>
              <Icon name='plus' size={28} color={'gray'} onPress={()=> setModalState(true)} />
        </View>
           <FlatList
             data={reviews}
             renderItem={({item}) => (
                 <TouchableOpacity onPress={()=> navigation.navigate('ReviewDetails',item)}>
                     <Card>
                         <Text style={globalStyles.text}>{item.title}</Text>
                     </Card>
                 </TouchableOpacity>
             )}
           />
        </View>
    )
}

const styles = StyleSheet.create({
    modalToggle:{
        alignSelf: 'center',
        marginBottom: 10,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        borderColor: '#f2f2f2'
    },
    modalContent: {
        flex:1,
    }
})