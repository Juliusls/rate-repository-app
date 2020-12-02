import React from 'react';
import { Formik } from 'formik';
import { View, TouchableWithoutFeedback, Text, StyleSheet } from 'react-native';
import * as yup from 'yup';
import FormikTextInput from '../FormikTextInput';
import theme from '../../utils/theme';

const initialValues = {
    ownerName: '',
    repositoryName: '',
    rating: '',
    text: ''
};

const validationSchema = yup.object().shape({
    ownerName: yup.string().required('Repository Owner Name is required'),
    repositoryName: yup.string().required('Repository Name is required'),
    rating: yup.number().min(0, 'Rating must be between 0 and 100').max(100, 'Rating must be between 0 and 100').required('Rating is required'),
    text: yup.string()
});

const styles = StyleSheet.create({
    button: {
        borderRadius: 5,
        backgroundColor: theme.colors.primary,
        padding: 10,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    view: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        height: 300,
        justifyContent: 'space-between',
        backgroundColor: 'white',
    },    
});

const CreateReviewContainer = ({onSubmit}) => {
   
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {({ handleSubmit }) => (
                <View style={styles.view}>
                    <FormikTextInput style={styles.fieldPadding} name='ownerName' placeholder='Repository Owner Name'/>
                    <FormikTextInput style={styles.fieldPadding} name='repositoryName' placeholder='Repository Name'/>
                    <FormikTextInput style={styles.fieldPadding} name='rating' placeholder='Rating between 0 and 100'/>
                    <FormikTextInput name='text' placeholder='Review' multiline numberOfLines={3}/>
                    <TouchableWithoutFeedback onPress={handleSubmit}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>
                                Create a review
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            )}
        </Formik>
    );
};
  
export default CreateReviewContainer;