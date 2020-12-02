import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import FormikTextInput from '../FormikTextInput';
import theme from '../../utils/theme';

const initialValues = {
    username: '',
    password: '',
    passwordConfirm: ''
};

const validationSchema = yup.object().shape({
    username: yup.string()
        .min(1, 'Username must be at least 1 characters')
        .max(30, 'Username must be at most 30 characters')
        .required('Username is required'),
    password: yup.string()
        .min(5, 'Password must be at least 5 characters')
        .max(50, 'Password must be at most 50 characters')
        .required('Password is required'),
    passwordConfirm: yup.string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required('Password confirmation is required')
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
        height: 250,
        justifyContent: 'space-between',
        backgroundColor: 'white',
    },    
});
 
const SignUpContainer = ({onSubmit}) => {
    

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {({ handleSubmit }) => (
                <View style={styles.view}>
                    <FormikTextInput name='username' placeholder='Username'/>
                    <FormikTextInput secureTextEntry name='password' placeholder='Password'/>
                    <FormikTextInput secureTextEntry name='passwordConfirm' placeholder='Password Confirmation'/>
                    <TouchableWithoutFeedback onPress={handleSubmit}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>
                                Sign Up
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            )}
        </Formik>
    );
};
 
export default SignUpContainer;
