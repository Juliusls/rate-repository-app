import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import useSignIn from '../../hooks/useSignIn';
import { CREATE_USER } from '../../graphql/mutations';
import SignUpContainer from './SignUpContainer';
 
const SignUp = () => {
    const [createUser] = useMutation(CREATE_USER);
    const [signIn] = useSignIn();

    const onSubmit = async (values) => {
        const { username, password } = values;
        try {
            await createUser({variables: {username, password}});
            await signIn({ username, password });
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <SignUpContainer onSubmit={onSubmit}/>
    );
};
 
export default SignUp;
