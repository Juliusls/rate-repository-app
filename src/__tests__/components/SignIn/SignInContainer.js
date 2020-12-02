import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import SignInForm from '../../../components/SingIn/SignInContainer';
// ...

describe('SignIn', () => {
    describe('SignInContainer', () => {
        it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
            // render the SignInContainer component, fill the text inputs and press the submit button
            const onSubmit = jest.fn();
            const { getByTestId } = render(<SignInForm onSubmit={onSubmit} />);
            fireEvent.changeText(getByTestId('username'), 'kalle');
            fireEvent.changeText(getByTestId('password'), 'password');
            fireEvent.press(getByTestId('signInButton'));


            await waitFor(() => {
                // expect the onSubmit function to have been called once and with a correct first argument
                expect(onSubmit.mock.calls[0][0]).toStrictEqual({"password": "password", "username": "kalle"});
            });
        });
    });
});