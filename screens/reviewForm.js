import React from 'react';
import { StyleSheet, View, Button, TextInput, Text} from 'react-native';
import globalStyles from '../styles/globalStyles';
import { Formik } from 'formik';
import * as yup from 'yup';
import FlatButton from '../shared/button';

const reviewSchema = yup.object({
   title: yup.string().required().min(4),
   body: yup.string().required().min(8),
   rating: yup.string().required().test('validNum',"The between 1-5",(val) => {
     return parseInt(val) < 6 && parseInt(val) > 0;
   })
})

export default function ReviewForm({ addReviews }){
    return (
        <View style={globalStyles.container} >
             <Formik
               initialValues={{title: '',body:'',rating:''}}
               validationSchema={reviewSchema}
               onSubmit={(values)=>{
                   addReviews(values);
                   console.log(values);
               }}
             >
            {(props) => (
                    <View>
                        <TextInput 
                          style={globalStyles.input}
                          placeholder="Review title"
                          onChangeText={props.handleChange('title')}
                          value={props.values.title}
                        />
                        <Text>{props.touched.title && props.errors.title}</Text>
                        <TextInput 
                          style={globalStyles.input}
                          placeholder="Review body"
                          onChangeText={props.handleChange('body')}
                          value={props.values.body}
                        />
                        <Text>{props.touched.body && props.errors.body}</Text>
                        <TextInput 
                          style={globalStyles.input}
                          placeholder="Review Ratind"
                          onChangeText={props.handleChange('rating')}
                          value={props.values.rating}
                        />
                        <Text>{props.touched.rating && props.errors.rating}</Text>
                        <FlatButton title='Submit' onPress={props.handleSubmit} />
                    </View>
                 )}
             </Formik>
        </View>
    )
}
