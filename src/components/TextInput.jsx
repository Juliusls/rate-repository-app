import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    input: {
        padding: 10,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'black',
        borderRadius: 5,
    },
    error: {
        borderColor: '#d73a4a'
    }
});

const TextInput = ({ style, error, ...props }) => {
    const textInputStyle = [
        styles.input,
        Boolean(error) && styles.error,
        style
    ];

    return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;