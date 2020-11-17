import React from 'react';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';
import { Text, TouchableWithoutFeedback, View, StyleSheet } from 'react-native';
import theme from '../theme';
import * as yup from 'yup';
import useSignIn from '../hooks/useSignIn';

const initialValues = {
    username: '',
    password: ''
};

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
        paddingHorizontal: 12,
        height: 200,
        justifyContent: 'space-evenly',
        backgroundColor: 'white',
    }
});

const SignInForm = ({ onSubmit }) => {
    return (
        <View style={styles.view}>
            <FormikTextInput name='username' placeholder='Username' />
            <FormikTextInput name='password' placeholder='Password' secureTextEntry />
            <TouchableWithoutFeedback onPress={onSubmit}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>
                        Sign In
                    </Text>
                </View>
            </TouchableWithoutFeedback>

        </View>
    );
};

const validationSchema = yup.object().shape({
    username: yup
        .string()
        .required('Username is required'),
    password: yup
        .string()
        .required('Password is required')
});

const SignIn = () => {
    const [signIn] = useSignIn();

    const onSubmit = async (values) => {
        const { username, password } = values;

        try {
            await signIn({ username, password });
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
        </Formik>
    );
};

export default SignIn;