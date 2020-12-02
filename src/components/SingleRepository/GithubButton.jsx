import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import theme from '../../utils/theme';


const GithubButton = ({repository}) => {
    return (
        <View>
            <TouchableOpacity onPress={() => WebBrowser.openBrowserAsync(repository.url)} style={cardStyles.button}>
                <Text style={cardStyles.buttonText}>Open in Github</Text>
            </TouchableOpacity>
        </View>
       
    );
};

export default GithubButton;

const cardStyles = StyleSheet.create({
    button: {
        marginTop: 20,
        borderRadius: 5,
        backgroundColor: theme.colors.primary,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        padding: 10,
        fontWeight: theme.fontWeights.bold
    },
});
